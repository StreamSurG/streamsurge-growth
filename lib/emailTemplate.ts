// ======================================================
// STREAMSURGE EMAIL TEMPLATE
// Creator Growth Systems
// ======================================================

import {
  gradientHeader,
  greeting,
  projectCard,
  progressBar,
  primaryButton,
  discordButton,
  signature,
  footer,
} from "./emailComponents";

type EmailTemplateProps = {
  title: string;
  subtitle: string;
  customerName: string;
  status: string;
  developer: string;
  delivery: string;
  progressStep: number;
  buttonText: string;
  buttonUrl: string;
  message: string;
};

export function emailTemplate({
  title,
  subtitle,
  customerName,
  status,
  developer,
  delivery,
  progressStep,
  buttonText,
  buttonUrl,
  message,
}: EmailTemplateProps) {
  return `
<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8" />

<meta
name="viewport"
content="width=device-width, initial-scale=1.0"
/>

<title>StreamSurge</title>

</head>

<body
style="
margin:0;
padding:0;
background:#0B0B0B;
font-family:Arial,Helvetica,sans-serif;
">

<table
width="100%"
cellpadding="0"
cellspacing="0"
>

<tr>

<td align="center">

<table
width="680"
cellpadding="0"
cellspacing="0"
style="
margin:40px auto;
background:#111111;
border-radius:22px;
overflow:hidden;
border:1px solid #222;
"
>

${gradientHeader(title, subtitle)}

<tr>

<td
style="
padding:50px;
"
>

${greeting(customerName)}

<p
style="
margin-top:30px;
font-size:17px;
line-height:34px;
color:#D4D4D4;
"
>

${message}

</p>

${projectCard(
status,
developer,
delivery
)}

${progressBar(
  progressStep,
  title
)}

${primaryButton(
buttonText,
buttonUrl
)}

${discordButton()}

${signature()}

${footer()}

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`;
}