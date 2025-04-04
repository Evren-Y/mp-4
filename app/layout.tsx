import React from "react";
import Header from "@/components/Header";

export default function RootLayout(
  {children,}:
    Readonly<{children: React.ReactNode;}>
){
  return (
    <html lang="en">
      <body style={{'backgroundColor': 'maroon'}}>
        <Header />
        {children}
      </body>
    </html>
  );
}