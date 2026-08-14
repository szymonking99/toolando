import type { LegalDocumentData } from "@/components/legal-document"

export const privacyZh: LegalDocumentData = {
  eyebrow: "隐私政策",
  title: "Toolando.tech 隐私政策",
  intro:
    "本隐私政策说明 Toolando.tech 上处理哪些数据、处理目的、法律依据以及您享有的权利。我依据欧盟条例 (EU) 2016/679（GDPR）及适用的波兰数据保护法律处理个人数据。",
  lastUpdated: "最后更新：2026年7月23日",
  sections: [
    {
      title: "§1. 数据控制者",
      paragraphs: [
        "1.1. 数据处理控制者（「控制者」）为 Szymon，Toolando.tech 的所有者，运营在线工具服务。",
        "1.2. 隐私联系：{{email}}。",
        "1.3. 控制者未任命数据保护官，因根据 GDPR 本活动无此要求。",
      ],
    },
    {
      title: "§2. 我们处理的数据",
      paragraphs: ["2.1. 根据您使用服务的方式，我们处理以下类别："],
      list: [
        "技术及使用数据：IP 地址、浏览器类型及版本、操作系统、语言、请求日期/时间、访问页面、流量来源、Cookie 标识符（经同意后）。",
        "账户数据：电子邮箱、密码（哈希）、用户 ID、注册日期、Premium 状态、Stripe 客户 ID（如适用）。",
        "支付数据：由 Stripe 处理——控制者不存储完整支付卡号。",
        "通信数据：电子邮箱、消息内容、联系日期——当您写信至 {{email}} 或使用联系表单时。",
        "用户文件：仅为执行工具操作而临时处理——转换完成后不存储。",
      ],
    },
    {
      title: "§3. 目的与法律依据",
      paragraphs: ["3.1. 我们为以下目的处理数据："],
      definitions: [
        {
          term: "提供服务",
          description:
            "文件转换、工具运行、账户管理——法律依据：GDPR 第 6(1)(b) 条（合同）或 (f)（合法利益：运营服务）。",
        },
        {
          term: "Premium 订阅",
          description:
            "支付及订阅处理——法律依据：GDPR 第 6(1)(b) 条；会计：第 6(1)(c) 条（法定义务）。",
        },
        {
          term: "流量分析",
          description:
            "Google Analytics——仅在同意分析 Cookie 后——法律依据：GDPR 第 6(1)(a) 条（同意）。",
        },
        {
          term: "广告",
          description:
            "Google AdSense——仅在同意广告 Cookie 后——法律依据：GDPR 第 6(1)(a) 条（同意）。",
        },
        {
          term: "安全",
          description:
            "滥用预防、服务器日志——法律依据：GDPR 第 6(1)(f) 条（合法利益）。",
        },
        {
          term: "联系与投诉",
          description:
            "回复消息——法律依据：GDPR 第 6(1)(f) 条或 (b)（如与合同相关）。",
        },
      ],
    },
    {
      title: "§4. Cookie 及类似技术",
      paragraphs: [
        "4.1. 服务使用 Cookie 及类似技术。首次访问时，我们显示同意横幅，您可接受全部 Cookie 或仅保留必要 Cookie。",
        "4.2. Cookie 类型：",
      ],
      list: [
        "必要——服务运行所必需（如语言、会话、Cookie 设置）。无需同意。",
        "分析——Google Analytics，汇总访问统计。需同意。",
        "广告——Google AdSense，广告个性化。需同意。",
      ],
      afterList: [
        "4.3. 您可随时通过横幅或浏览器设置更改 Cookie 偏好。",
      ],
    },
    {
      title: "§5. 接收方与数据处理者",
      paragraphs: ["5.1. 数据可能共享给代表控制者行事的可信数据处理者："],
      list: [
        "Vercel Inc.——托管与基础设施（美国，欧盟标准合同条款）。",
        "Stripe, Inc.——Premium 支付处理（美国/爱尔兰，PCI DSS）。",
        "Google LLC——Analytics 与 AdSense（经同意后；合作伙伴政策：https://policies.google.com/technologies/partner-sites）。",
        "Resend——事务性邮件（如注册后欢迎邮件），如已配置。",
        "AI 模型提供商——仅在 Premium AI 工具内处理提示与文件，完成后不存储。",
      ],
      afterList: ["5.2. 控制者不出售个人数据给第三方。"],
    },
    {
      title: "§6. 上传至工具的文件",
      paragraphs: [
        "6.1. 上传至转换器及其他工具的文件，操作完成后不存储。",
        "6.2. 文件不用于 AI 模型训练、画像或营销。",
        "6.3. 部分工具（如通用文件打开器）完全在浏览器本地处理文件——文件不会离开您的设备。",
        "6.4. 请勿上传含敏感数据的文件（如健康数据、身份证号），除非绝对必要——风险自负。",
      ],
    },
    {
      title: "§7. 保留期限",
      paragraphs: ["7.1. 我们按以下期限保留数据："],
      list: [
        "账户数据——直至账户删除或删除请求。",
        "服务器日志——最长 90 天，除非权利主张需要更长保留。",
        "通信——案件结束后最长 3 年。",
        "账单数据（Stripe）——依税法（通常 5 年）。",
        "用户文件——处理后立即删除（通常数秒至数分钟）。",
        "Cookie 设置——最长 12 个月或直至撤回同意。",
      ],
    },
    {
      title: "§8. 您的权利（GDPR）",
      paragraphs: ["8.1. 您享有以下权利："],
      list: [
        "访问权（GDPR 第 15 条）。",
        "更正权（GDPR 第 16 条）。",
        "删除权——「被遗忘权」（GDPR 第 17 条）。",
        "限制处理权（GDPR 第 18 条）。",
        "数据可携权（GDPR 第 20 条）。",
        "基于 GDPR 第 6(1)(f) 条的处理反对权（GDPR 第 21 条）。",
        "随时撤回同意权——不影响撤回前处理的合法性（GDPR 第 7(3) 条）。",
        "向监管机构投诉的权利（波兰：PUODO，uodo.gov.pl）。",
      ],
      afterList: [
        "8.2. 行使权利请写信至 {{email}}。我将无不当延迟回复，最迟 30 天内。",
      ],
    },
    {
      title: "§9. 数据安全",
      paragraphs: [
        "9.1. 我采取与风险相称的技术与组织措施，包括 HTTPS 加密、受限系统访问及处理后删除文件。",
        "9.2. 没有系统 100% 安全。若个人数据泄露可能对您的权利构成高风险，我将依 GDPR 第 34 条通知您。",
      ],
    },
    {
      title: "§10. 儿童",
      paragraphs: [
        "10.1. 服务不面向 16 岁以下儿童。未经监护人同意，我不会故意处理 16 岁以下儿童的数据。",
        "10.2. 若您认为儿童未经监护人同意提供数据，请联系 {{email}}——数据将被删除。",
      ],
    },
    {
      title: "§11. 本政策变更",
      paragraphs: [
        "11.1. 本政策可能更新以反映服务、技术或法律变更。",
        "11.2. 重大变更将通过服务内通知或电子邮件（有账户用户）告知。",
        "11.3. 当前版本始终可在 /polityka-prywatnosci 获取。",
      ],
    },
  ],
  footerNote:
    "隐私问题：{{email}}。使用条款见 /regulamin。",
}
