
export function GET(context, next) {
    console.log(context.url.pathname) // this will log "/blog"
    if (context.url.pathname.includes("admin")) {
      return context.rewrite("/admin")
    }
    next()
  }