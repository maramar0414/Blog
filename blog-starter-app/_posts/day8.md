---
title: "Day 8: Feedback Form in Next.js"
excerpt: "I worked on adding a feedback form to my blog, following a structured approach from the School of Code. I faced challenges, resolved deployment issues, and decided to create a branch for further work. Despite ongoing deployment challenges, I plan to address them later and express optimism for the next day."
coverImage: "/assets/blog/day8/cover.jpg"
date: "2024-01-21T05:35:07.322Z"
author:
  name: Maria Araque
  picture: "/assets/blog/authors/maria.jpg"
ogImage:
  url: "/assets/blog/day8/cover.jpg"
---

Today, I worked on adding a feedback form to my blog webpage—an idea I had today. Since the web is already deployed, I can benefit from it from the beginning.

I started this task as we were taught in the School of Code: Planning.

First, I translated my idea into words: "I want to add a feedback form, adding a text area and a send button. When the button is clicked, the form is sent to my email."

Secondly, I planned an overview of my task: Add code comments.

Then, I started to break down the plan into small tasks:

Create the component and call it in the parent (footer).
Add content to the component:
Textbox? Oh no! I had to do a bit of research to find out/remember what it is called and how I can add it with Next.js.
I'm sure about the button, so I reused the one from the template, looking into my GitHub history.
Okay. Now, I wrap the button in a form tag and add a text area.
The first three tasks were done. It was kind of easy. Next, break down more the logic to collect data:

Collect the data:
Get values from the text area - state.
Display an error message if there isn't a message.
Clean the text area.
Submit:
Send - error message?
Fetch data.
Receive:
Access the route.
While breaking down these tasks, I realized there is an error with the latest deployments of the web, so I paused my momentum and worked on it.

Deployment challenges:

Error message "wrong root directory" - I read the documentation and changed it.
New error "typescript expecting a number instead of a string" - I changed it to a number.
New error "wrong root directory" - I changed to the previous root directory.
It's working!

Wait a minute… deployment each time I push. Do I want everyone to see my changes? I better create a branch to work on it.

The branch is still deploying. :’(

I'll solve it later, and I'll stop pushing.

Coming back to the plan, I think it's a better idea to refresh on IPA and data collection.

See you tomorrow! 😊