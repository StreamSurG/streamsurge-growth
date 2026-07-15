// ======================================================
// STREAMSURGE EMAIL COMPONENTS
// Creator Growth Systems
// ======================================================

export const colors = {
  background: "#0B0B0B",
  card: "#151515",
  border: "#252525",

  purple: "#9333EA",
  pink: "#D946EF",

  green: "#22C55E",

  blue: "#38BDF8",

  white: "#FFFFFF",

  gray: "#A3A3A3",

  light: "#E5E5E5",
};

export function gradientHeader(title: string, subtitle: string) {
  return `
<tr>

<td
style="
padding:34px;
background:linear-gradient(90deg,#7C3AED,#D946EF);
text-align:center;
">

<h1
style="
margin:0;
color:white;
font-size:34px;
font-weight:800;
">

STREAMSURGE

</h1>

<p
style="
margin-top:12px;
color:white;
font-size:16px;
">

Creator Growth Systems

</p>

<h2
style="
margin-top:30px;
color:white;
font-size:28px;
">

${title}

</h2>

<p
style="
margin-top:12px;
color:white;
">

${subtitle}

</p>

</td>

</tr>
`;
}

export function greeting(name: string) {
  return `
<h2
style="
color:white;
margin:0;
font-size:30px;
">

Hello ${name} 👋

</h2>

<p
style="
margin-top:20px;
color:#D4D4D4;
font-size:17px;
line-height:32px;
">

Thank you for choosing
<strong style="color:white;">
StreamSurge
</strong>.

We're excited to help grow your content.

</p>
`;
}

export function projectCard(
  status: string,
  developer: string,
  delivery: string
) {
  return `
<table
width="100%"
style="
margin-top:40px;
background:${colors.card};
border:1px solid ${colors.border};
border-radius:14px;
padding:26px;
">

<tr>

<td>

<p style="color:${colors.gray};margin:0;">
Project Status
</p>

<h2
style="
margin-top:10px;
color:${colors.green};
">

${status}

</h2>

</td>

<td align="right">

<p style="color:${colors.gray};margin:0;">
Estimated Delivery
</p>

<h2
style="
margin-top:10px;
color:${colors.purple};
">

${delivery}

</h2>

</td>

</tr>

<tr>

<td colspan="2">

<hr
style="
margin:25px 0;
border:none;
border-top:1px solid #222;
">

<p style="margin:0;color:${colors.gray};">
Assigned Developer
</p>

<h3
style="
margin-top:10px;
color:${colors.blue};
">

${developer}

</h3>

</td>

</tr>

</table>
`;
}

// UPDATED
export function progressBar(
  step: number,
  packageName: string
) {
  const completed = "🟢";
  const current = "🟣";
  const pending = "⚪";

  const icons = [
    step >= 1 ? completed : pending,
    step >= 2 ? completed : pending,
    step === 3 ? current : step > 3 ? completed : pending,
    step >= 4 ? completed : pending,
  ];

  return `
<div
style="
margin-top:45px;
">

<h3
style="
color:white;
">

Project Progress

</h3>

<p
style="
font-size:18px;
line-height:40px;
color:white;
">

${icons[0]} Requirements Submitted

<br>

${icons[1]} Developer Assigned

<br>

${icons[2]} ${packageName} In Progress

<br>

${icons[3]} Completed

</p>

</div>
`;
}

export function primaryButton(
  text: string,
  url: string
) {
  return `
<div
style="
margin:50px 0;
text-align:center;
">

<a
href="${url}"
style="
background:${colors.purple};
padding:18px 38px;
border-radius:12px;
display:inline-block;
color:white;
text-decoration:none;
font-weight:bold;
font-size:18px;
">

${text}

</a>

</div>
`;
}

export function discordButton() {
  return `
<div
style="
text-align:center;
margin-bottom:50px;
">

<a
href="https://discord.gg/sdaACjhWx"
target="_blank"
style="
display:inline-block;
padding:16px 32px;
background:#5865F2;
color:#FFFFFF;
font-weight:bold;
font-size:17px;
border-radius:12px;
text-decoration:none;
">

💬 Join Our Discord Community

</a>

<p
style="
margin-top:16px;
font-size:14px;
color:#A3A3A3;
line-height:24px;
">

Need help, have questions, or want to request revisions?
Join our Discord server and we'll be happy to assist you.

</p>

</div>
`;
}

export function signature() {
  return `
<hr
style="
border:none;
border-top:1px solid #222;
margin:45px 0;
">

<p
style="
color:white;
line-height:34px;
">

Best Regards,

<br><br>

<strong style="font-size:22px;">

Optify Ogo

</strong>

<br>

Founder & CEO

<br>

STREAMSURGE

<br>

<span style="color:#A855F7;">

Creator Growth Systems

</span>

</p>
`;
}

export function footer() {
  return `
<hr
style="
border:none;
border-top:1px solid #222;
margin:45px 0;
">

<p
style="
font-size:13px;
color:#888;
line-height:26px;
text-align:center;
">

You're receiving this email because you submitted
a project through StreamSurge.

<br><br>

🌐 https://streamsurge-growth.vercel.app

<br><br>

© 2026 StreamSurge

<br>

All Rights Reserved.

</p>
`;
}