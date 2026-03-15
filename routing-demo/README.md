for learning about route we are going to create to create new project

cmd: npx create-next-app@latest routing-demo

## routing conviniations

-> all route must be inside app directory
-> route file must be in page.tsx or page.js
-> every folder is segment in URL path.

Task 1

create homepage for route localhost:3000/

solution
step: 1 -> since we want to start from zero
step: 2 -> clear all code from global.css and page.tsx then write

export default function home() {
return <div>home page</div>;
}

3. check in browser enter localhost:3000/
   4 you cann see the home page in browser

==

Task 2:: create /about and /profile

step 1: create folder profile inside app directory
2 create page.tsx
3 write code
export default function About() {
return <div>about</div>;
}

3. test in browser /locahost:3000/profile

==
do same for/about

===

topic nested routes

==

task 3 create localhost:3000/blogs
create localhost:3000/blogs/first
create localhost:3000/blogs/second

step 1: create blog folder inside app directory
step 2 : create folder first inside blogs
step 3: create page.tsx and write conent and check in browser
export default function first() {
return <div>first blog</div>;
}

==

# do same for second

topic dynamic routes
everytime its not practical to make directory for all 1st 2nd so what we do is will create dynamic route and contet will as per id or slug

Task 4

create /products folder where 3 products are avaibale
create products/id for detail of that particular product

===

solution

as we created ablogs/first and second but in our case rn its not practical to make product/1 product/2 so what we do is create a file and write all detils related code and as by id the details will be visiable

step 1 create products folder and page.tsx

export default function products() {
return (
<div>
<h1>Products list</h1>
<h2>product 1</h2>
<h2>product 2</h2>
<h2>product 3</h2>
</div>
);
}

inside this again create folder [id] (don't forget []) than create page.tsx inside and write content there

export default async function productDetails({
params,
}: {
params: Promise<{ id: string }>;
}) {
const id = (await params).id;
return (
<div>
<h1>product details:{id}</h1>
</div>
);
}

we make to make the function async and pass params show details

no in url if we add products/1

in browser it will see product details:1

no in url if we add products/100

in browser it will see product details:100

--

nested dynamic route

task: 5

products/iid/reviews/1

step 1: as we already created product/id we can directly create review folder and inside it add [id ] name it reviewId to folder and make page.tsx (cant make it like id it will cause conflict )
ste 2 code

import { notFound } from "next/navigation";
export default async function reviewDetails({
params,
}: {
params: Promise<{ id: string; reviewId: string }>;
}) {
const { id, reviewId } = await params;

if (parseInt(reviewId) > 100) {
notFound();
}
return (
<div>
<h1>review id:{reviewId}</h1>
<h1>product id:{id}</h1>
</div>
);
}

--

here in url if we add products/3000/products/1/reviews/2

the page will response review id: 2 product id: 1

===

route folder structure

-> app/page.tsx - localhost:300/
-> app/about/page.tsx - localhost:300/about
-> app/profile/page.tsx - localhost:300/profile
-> app/blog/page.tsx - localhost:300/blog
-> app/blog/first/page.tsx - localhost:300/blog/first
-> app/blog/second.tsx - localhost:300/blog/second
-> app/products/page.tsx - localhost:300/products
-> app/products/[id]/page.tsx - localhost:300/products/1
-> app/products/[id]/review/[reviewId]/page.tsx - localhost:300/products/1/review/2

===

cache-all segments
task 6 localhost: 3000/docs/feature1concept 1
feature 1 : concept 1-5
feature 2 : concept 1-5
feature 3 : concept 1-5
feature 4 : concept 1-5
feature 5 : concept 1-5

--
if we don't have concept of dynamic routes we have to make 20*20 =400 pages
since we have dynamic routes we can just have 1 folder :: [featureId]*[conceptId]

now url become
localhost:3000/docs/feature1/concept1/example1

now what happen is if we add 1 more segment in url we have o create 1 more nested folder since our app have same layout we can just use 1 file, that is exactly catch-all segments.

==

step 1 create docs folder inside app directory
step 2 create [...slug]->page.tsx :: the best part of this [...slug] is it match any url starts with docs now if we name folder […slug] as [[...slug]] it will show docs home page in we add mistake url and not 404 error
step 3 write code and content for UI

export default async function Docs({
params,
}: {
params: Promise<{ slug: string[] }>;
}) {
const { slug } = await params;

if (slug?.length === 2) {
return (
<h1>
viewing docs for feature {slug[0]} and concept {slug[1]}
</h1>
);
} else if (slug?.length === 1) {
return <h1>viewing docs for feture {slug[0]}</h1>;
}
return <h1>doc home page</h1>;
}

===

## costomize 404 page.tsx

-> the default 404 page is fine for development but for product we definitely customize it.
-> steps: create not-found.tsx inside app directory
-> we can create not found for specific page like a layout
-> we can do not found function of js with conditions like

-> conditions like: review id >100 show not found

1. import notfound() from next/navigation
2. give condition
3. check in browser you will get not found when reviewed is greater than 100

export default function NotFound() {
return (
<div>
<h2>Page Not Found</h2>
<p>The requested page could not be found.</p>
</div>
);
}

==

import { notFound } from "next/navigation";
export default async function reviewDetails({
params,
}: {
params: Promise<{ id: string; reviewId: string }>;
}) {
const { id, reviewId } = await params;

if (parseInt(reviewId) > 100) {
notFound();
}
return (
<div>
<h1>review id:{reviewId}</h1>
<h1>product id:{id}</h1>
</div>
);
}
==

for specific page not-found we can create not-found inside that particular folder we can create it inside products page

===

# file colocation

-> as we are using file base routing system routes works only when inside the folder page.tsx and page.ts is there
-> need to export default file to execute
-> we can create file inside component folder inside app directory and we can folder inside app directory and can import in page.ts and work

====

private file
-> A way to tell next js , "hey, this is a folder is just for internal staff not include in external route."
the folder and all sub folder are excudes from routing
-> add _ (underscore ) at the start of the file name (_)
steps:

1. inside app directory create \_lib folder
2. create page.tsx write some content
3. if we do \_lib/ then it will say page not found even through it have page.tsx and export the page
   private folders are supt unseful bunch of things
4. keepin your ui logic separate from routing logic
5. having a consistence way to organize internal files
6. making git easier to group related filing code editor
7. avoiding potential naming configs with future nextjs namng conventions

===

route groups

-> let us logically organize our rutes ad projects file without impacting the uRL structure
lets implement authentication rotes

- register, login and forget password

step 1
inside app directory create login/ register and forgot password folder
add page.tsx with a heading

- if we check to browser it will work but there is a issue if we are working solo and know all authentication routes but when but when we are working on team its challenging

so for solution we are creatin auth folder which is a house for all authenticated related routes

-> for this will create folder auth and inside this add all 3 folders
-> if we don't want to mak eit like auth/login and auth/forgot-password we can create folder like this (auth) now localhost/login will work

====

layouts
-> pages are route-specific ui components
-> a layout is ui that is shared between multiple pages in your app
such as header and footer which appres in everypage

->next js make it super easy to implement
how can we create layout

1. default export a react component from a layout.tsx
   -> that component taskes a children props your page content
   -> inside root directory we default get layout.tsx
   we can create layout.tsx of each folder

lets understand layout.tsx
-> every react layout component need a children props
-> in our case page.tsx in children when layout.tsx renders

-> next: title and metadata these 2 helps in SEO (search engine aptimization ) the context which we wrote in title and description will be in title and description if we want to check it inspect the code in in elemnt inside head we can get it.

we can add header and footer to check how layout.tsx works

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata: Metadata = {
title: "Create Next App",
description: "Generated by create next app",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en">
<body
className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
<header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
im header
</header>
{children}
<footer style={{ backgroundColor: "ghostwhite", padding: "1rem" }}>
im footer
</footer>
</body>
</html>
);
}

==

now what will happen is every page will change not im header and im footer will be in all pages
here we can make component and import too

==

nested layout

-> we have already discussed layout its a handy ui component that are shared multiple pages in application

-> in every app we need layout.tsx
-> here is something wonderful we can nest them too
-<>> for example we need a layout only for product details pages we can create layout.tsx inside details too that layout will only useful for details

export default function ProductLayout({
children,
}: {
children: React.ReactNode;
}) {
return <>{children}

  <h2>feature product</h2>
  </>;
}

---
