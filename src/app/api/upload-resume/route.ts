import { google } from "googleapis";
import { NextResponse } from "next/server";
import { Readable } from "stream";

// function bufferToStream(buffer: Buffer) {
//   return new Readable({
//     read() {
//       this.push(buffer);
//       this.push(null);
//     },
//   });
// }

// export async function POST(req: Request) {
//   const form = await req.formData();
//   const file = form.get("resume") as File;

//   if (!file) {
//     return NextResponse.json({ error: "No file provided" }, { status: 400 });
//   }

//   // Convert File -> Buffer
//   const bytes = await file.arrayBuffer();
//   const buffer = Buffer.from(bytes);

//   // Google auth
//   const auth = new google.auth.GoogleAuth({
//     keyFile: "keys/drive-key.json",
//     scopes: ["https://www.googleapis.com/auth/drive.file"],
//   });

//   const drive = google.drive({ version: "v3", auth });

//   // Upload
//   const upload = await drive.files.create({
//     requestBody: {
//       name: `${Date.now()}_${file.name}`,
//       parents: ["1EkCNwp3oD0Fq8YKqBmO5rvWg-K9DUCvz"],
//     },
//     media: {
//       mimeType: file.type,
//       body: bufferToStream(buffer),   // ✅ FIXED
//     },
//   });

//   const fileId = upload.data.id;

//   // Make public
//   await drive.permissions.create({
//     fileId,
//     requestBody: { role: "reader", type: "anyone" },
//   });

//   const url = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;

//   return NextResponse.json({ url });
// }
