export const zhTools = {
  "przelicznik-walut": {
    "cat": "finance",
    "name": "货币转换器",
    "desc": "使用 ECB 当前参考汇率在线转换货币。PLN、EUR、USD 及数十种其他货币对 — 无需注册。",
    "steps": [
      "输入金额和源货币。",
      "选择目标货币。",
      "查看结果和当日汇率。"
    ],
    "faq": [
      {
        "q": "汇率来自哪里？",
        "a": "通过 Frankfurter API 获取欧洲中央银行参考汇率，工作日更新。"
      },
      {
        "q": "汇率是实时的吗？",
        "a": "这是 ECB 参考汇率，不是银行或兑换处汇率。"
      }
    ]
  },
  "kalkulator-dat": {
    "cat": "time",
    "name": "日期计算器",
    "desc": "计算两个日期之间的天数、工作日和星期几 — 适用于合同和截止日期。",
    "steps": [
      "选择开始和结束日期。",
      "查看天数和周数差异。",
      "可选仅计算工作日。"
    ],
    "faq": [
      {
        "q": "是否排除节假日？",
        "a": "默认排除周六和周日。节假日因国家而异。"
      }
    ]
  },
  "strefy-czasowe": {
    "cat": "time",
    "name": "时区差异",
    "desc": "比较城市间的本地时间，查看时差，并在简单世界地图上定位。",
    "steps": [
      "选择源城市和目标城市。",
      "比较当前本地时间。",
      "查看偏移量和地图标记。"
    ],
    "faq": [
      {
        "q": "是否考虑夏令时？",
        "a": "是 — 我们使用 IANA 时区（如 Europe/Warsaw），自动应用 DST。"
      }
    ]
  },
  "przelicznik-jednostek": {
    "cat": "units",
    "name": "单位转换器",
    "desc": "转换长度、质量、温度和体积：cm↔英寸、kg↔lb、°C↔°F 等。",
    "steps": [
      "选择单位类别。",
      "输入数值和单位。",
      "立即获得结果。"
    ],
    "faq": [
      {
        "q": "转换是否精确？",
        "a": "是 — 标准 SI 系数。温度使用专用公式，而非简单乘法。"
      }
    ]
  },
  "kalkulator-vat": {
    "cat": "finance",
    "name": "增值税和百分比计算器",
    "desc": "添加或扣除增值税（23%、8%、5%），计算净/毛额及简单百分比。",
    "steps": [
      "输入净额或毛额。",
      "选择增值税率或自定义百分比。",
      "查看净额、增值税和毛额明细。"
    ],
    "faq": [
      {
        "q": "波兰有哪些增值税率？",
        "a": "标准 23%，降低税率 8% 和 5%。也可输入自定义税率。"
      }
    ]
  },
  "kalkulator-wieku": {
    "cat": "time",
    "name": "年龄和倒计时计算器",
    "desc": "精确计算年龄（年、月、日）— 或距离某日期的剩余天数。",
    "steps": [
      "输入出生日期或目标日期。",
      "查看年龄或倒计时。",
      "也可查看下一个生日。"
    ],
    "faq": [
      {
        "q": "年龄如何计算？",
        "a": "从出生日期到今天，按年、月、日计算 — 不仅是日历年。"
      }
    ]
  },
  "generator-hasel": {
    "cat": "dev",
    "name": "密码生成器",
    "desc": "在浏览器中本地生成强密码。设置长度和字符集 — 不会发送到服务器。",
    "steps": [
      "设置长度和字符选项。",
      "点击生成。",
      "一键复制。"
    ],
    "faq": [
      {
        "q": "密码会上传吗？",
        "a": "不会 — 生成完全在您的浏览器中进行。"
      }
    ]
  },
  "licznik-znakow": {
    "cat": "text",
    "name": "字符和字数统计",
    "desc": "统计字符、单词、句子和段落 — 适用于 SEO、社交媒体和表单限制。",
    "steps": [
      "粘贴或输入文本。",
      "查看实时统计。",
      "检查不含空格的字符数。"
    ],
    "faq": [
      {
        "q": "单词如何计数？",
        "a": "单词是由空格或换行分隔的序列。"
      }
    ]
  },
  "generator-qr": {
    "cat": "dev",
    "name": "QR 码生成器",
    "desc": "从链接或文本创建 QR 码并下载为 PNG。在浏览器中本地运行。",
    "steps": [
      "输入文本或 URL。",
      "生成 QR 预览。",
      "下载 PNG 图片。"
    ],
    "faq": [
      {
        "q": "QR 内容会上传吗？",
        "a": "不会 — 码在本地生成。我们不存储内容。"
      }
    ]
  },
  "kalkulator-bitrate": {
    "cat": "media",
    "name": "文件大小和 bitrate 计算器",
    "desc": "估算给定 bitrate 和时长下音视频文件的大小 — 或符合 MB 限制的 bitrate。",
    "steps": [
      "选择从 bitrate 算大小或从限制算 bitrate。",
      "输入时长和数值。",
      "查看 MB / kbps 结果。"
    ],
    "faq": [
      {
        "q": "是否包含容器？",
        "a": "估算原始流。容器和额外轨道通常会增加几个百分点。"
      }
    ]
  },
  "konwerter-kolorow": {
    "cat": "dev",
    "name": "HEX RGB HSL 颜色转换器",
    "desc": "在 HEX、RGB 和 HSL 之间转换颜色，并检查与背景的 WCAG 对比度。",
    "steps": [
      "以任意格式输入颜色。",
      "查看 HEX/RGB/HSL 等效值。",
      "检查与背景的对比度。"
    ],
    "faq": [
      {
        "q": "AA / AAA 是什么意思？",
        "a": "WCAG 文本与背景对比度的无障碍等级。"
      }
    ]
  },
  "base64": {
    "cat": "dev",
    "name": "Base64 编码 / 解码",
    "desc": "将文本编码为 Base64 或解码 Base64。本地处理，不上传数据。",
    "steps": [
      "粘贴文本或 Base64。",
      "选择编码或解码。",
      "复制结果。"
    ],
    "faq": [
      {
        "q": "支持 UTF-8 吗？",
        "a": "是 — 支持 Unicode 字符。"
      }
    ]
  },
  "unix-timestamp": {
    "cat": "dev",
    "name": "Unix timestamp ↔ 日期",
    "desc": "将 Unix timestamp（秒/ms）转换为日期及反向转换。适用于日志和 API。",
    "steps": [
      "粘贴 timestamp 或选择日期。",
      "查看 ISO 和本地结果。",
      "复制值。"
    ],
    "faq": [
      {
        "q": "秒还是毫秒？",
        "a": "根据长度自动检测。也可强制指定单位。"
      }
    ]
  },
  "generator-uuid": {
    "cat": "dev",
    "name": "UUID 生成器",
    "desc": "一键生成 UUID v4（随机）。需要时可一次生成多个。",
    "steps": [
      "设置 UUID 数量。",
      "点击生成。",
      "复制列表。"
    ],
    "faq": [
      {
        "q": "哪个 UUID 版本？",
        "a": "UUID v4 — 随机，RFC 4122，在浏览器中生成。"
      }
    ]
  },
  "generator-hash": {
    "cat": "dev",
    "name": "SHA / MD5 hash",
    "desc": "计算文本的 SHA-1、SHA-256、SHA-512 或 MD5。通过 Web Crypto 本地计算。",
    "steps": [
      "粘贴文本。",
      "选择算法。",
      "复制 hex hash。"
    ],
    "faq": [
      {
        "q": "MD5 安全吗？",
        "a": "MD5 不适用于密码。安全用途请用 SHA-256+；MD5 仅用于 checksum。"
      }
    ]
  },
  "json-formatter": {
    "cat": "dev",
    "name": "JSON 格式化器",
    "desc": "在浏览器中格式化和压缩 JSON — 不上传到服务器。",
    "steps": [
      "粘贴 JSON。",
      "点击格式化或压缩。",
      "复制结果。"
    ],
    "faq": [
      {
        "q": "数据会上传吗？",
        "a": "不会 — 处理在浏览器中本地进行。"
      }
    ]
  },
  "diff-tekstu": {
    "cat": "text",
    "name": "文本 diff",
    "desc": "逐行比较两段文本并高亮差异。",
    "steps": [
      "粘贴文本 A 和 B。",
      "查看高亮的差异。"
    ],
    "faq": [
      {
        "q": "这是完整 diff 吗？",
        "a": "逐行比较 — 适合短片段和列表。"
      }
    ]
  },
  "konwerter-wielkosci-liter": {
    "cat": "text",
    "name": "大小写转换器",
    "desc": "将文本转换为大写、小写、Title Case 或 sentence case。",
    "steps": [
      "粘贴文本。",
      "选择模式。",
      "复制结果。"
    ],
    "faq": []
  },
  "usun-duplikaty-linii": {
    "cat": "text",
    "name": "删除重复行",
    "desc": "从邮件列表、SKU 或标签中删除重复行。",
    "steps": [
      "粘贴列表。",
      "设置选项。",
      "复制清理后的列表。"
    ],
    "faq": []
  },
  "dekoder-jwt": {
    "cat": "dev",
    "name": "JWT 解码器",
    "desc": "读取 JWT 的 header 和 payload，不验证签名。",
    "steps": [
      "粘贴 token。",
      "检查 header 和 payload。"
    ],
    "faq": [
      {
        "q": "会验证签名吗？",
        "a": "不会 — 仅解码 token 的 Base64URL。"
      }
    ]
  },
  "walidator-nip-pesel": {
    "cat": "dev",
    "name": "NIP / PESEL / REGON 验证器",
    "desc": "按 checksum 规则验证波兰税务和身份号码。",
    "steps": [
      "输入号码。",
      "查看验证结果。"
    ],
    "faq": [
      {
        "q": "会查询 GUS 注册库吗？",
        "a": "不会 — 仅 checksum 和长度。"
      }
    ]
  },
  "kalkulator-kredytu": {
    "cat": "finance",
    "name": "贷款计算器",
    "desc": "计算等额本息还款、总还款额和利息成本。",
    "steps": [
      "输入金额、利率和期限。",
      "查看月供。"
    ],
    "faq": [
      {
        "q": "包含银行手续费吗？",
        "a": "简化模拟，不含手续费或保险。"
      }
    ]
  },
  "markdown-preview": {
    "cat": "text",
    "name": "Markdown 预览",
    "desc": "编写 Markdown 并在浏览器中查看实时 HTML 预览。",
    "steps": [
      "输入 Markdown。",
      "预览自动更新。"
    ],
    "faq": []
  },
  "sila-hasla": {
    "cat": "dev",
    "name": "密码强度",
    "desc": "根据长度、字符多样性和常见模式评估密码强度。",
    "steps": [
      "输入密码。",
      "查看评分和建议。"
    ],
    "faq": [
      {
        "q": "密码会上传吗？",
        "a": "不会 — 评分在浏览器中本地进行。"
      }
    ]
  },
  "konwerter-napisow": {
    "cat": "media",
    "name": "SRT / VTT 字幕转换器",
    "desc": "在 SRT 和 WebVTT 格式之间转换字幕。",
    "steps": [
      "粘贴字幕。",
      "选择方向或自动。",
      "复制结果。"
    ],
    "faq": []
  },
  "generator-nazw-plikow": {
    "cat": "text",
    "name": "批量文件重命名",
    "desc": "使用 {name}、{ext}、{index} 模式批量重命名文件。",
    "steps": [
      "粘贴文件列表。",
      "设置模式。",
      "复制新名称。"
    ],
    "faq": []
  },
  "walidator-iban": {
    "cat": "dev",
    "name": "IBAN 验证器",
    "desc": "验证 IBAN checksum（mod 97）和国家特定长度。",
    "steps": [
      "粘贴 IBAN。",
      "查看格式化输出和验证结果。"
    ],
    "faq": [
      {
        "q": "会验证银行账户吗？",
        "a": "不会 — 仅格式和 checksum。"
      }
    ]
  },
  "kalkulator-b2b": {
    "cat": "finance",
    "name": "B2B 与雇佣计算器",
    "desc": "比较雇佣净薪与 B2B 发票收入（固定税或线性税）。",
    "steps": [
      "输入雇佣毛薪和 B2B 收入。",
      "选择税务形式。",
      "比较结果。"
    ],
    "faq": [
      {
        "q": "这是税务建议吗？",
        "a": "不是 — 简化模拟，供与会计师讨论。"
      }
    ]
  }
};
