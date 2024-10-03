

/** 
export function GET(context, next) {
    if (context.url.pathname.includes("admin")) {
      return context.rewrite("/admin")
    }
    next()
}*/

export async function GET({ params, redirect }) {
  return redirect("/admin", 307);
}