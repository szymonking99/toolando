"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Send, Loader2, Bot, User } from "lucide-react"

export function AiChatTool() {
  const [input, setInput] = useState("")
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/ai/chat" }),
  })
  const scrollRef = useRef<HTMLDivElement>(null)

  const busy = status === "submitted" || status === "streaming"

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [messages])

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || busy) return
    sendMessage({ text: input })
    setInput("")
  }

  return (
    <div className="flex h-[32rem] flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Bot className="size-6" />
            </span>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Zadaj dowolne pytanie — pomogę Ci z pisaniem, pomysłami, kodem czy
              codziennymi zadaniami.
            </p>
          </div>
        )}

        {messages.map((message) => {
          const isUser = message.role === "user"
          const text = message.parts
            .filter((p) => p.type === "text")
            .map((p) => (p as { text: string }).text)
            .join("")
          return (
            <div
              key={message.id}
              className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}
            >
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full ${
                  isUser
                    ? "bg-white/10 text-foreground"
                    : "bg-primary/15 text-primary"
                }`}
              >
                {isUser ? (
                  <User className="size-4" />
                ) : (
                  <Bot className="size-4" />
                )}
              </span>
              <div
                className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  isUser
                    ? "bg-primary text-primary-foreground"
                    : "border border-white/10 bg-white/[0.04] text-foreground"
                }`}
              >
                {text || (
                  <Loader2 className="size-4 animate-spin text-primary" />
                )}
              </div>
            </div>
          )
        })}

        {error && (
          <p className="text-center text-sm text-destructive">
            Wystąpił błąd asystenta. Sprawdź, czy AI Gateway jest aktywny
            (wymaga karty płatniczej).
          </p>
        )}
      </div>

      <form
        onSubmit={submit}
        className="flex items-center gap-2 border-t border-white/10 bg-white/[0.02] p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !e.shiftKey &&
              !e.nativeEvent.isComposing &&
              e.keyCode !== 229
            ) {
              submit(e)
            }
          }}
          placeholder="Napisz wiadomość…"
          className="flex-1 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
        />
        <button
          type="submit"
          disabled={!input.trim() || busy}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/85 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Wyślij"
        >
          {busy ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Send className="size-4" />
          )}
        </button>
      </form>
    </div>
  )
}
