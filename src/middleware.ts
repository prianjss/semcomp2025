import { NextRequest, NextResponse, userAgent } from "next/server";

export function middleware(request: NextRequest){
  const url = request.nextUrl;
  const newHeaders = new Headers(request.headers);
  if(url.pathname=='/'){
    const { os } = userAgent(request);
    const name = os.name || 'null';
    newHeaders.set('os-name',name.toLowerCase());
  }
  return NextResponse.next({
    request:{
      headers: newHeaders,
    }
  });
}