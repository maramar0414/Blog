---
title: "Day 11: "
excerpt: ""
coverImage: "/assets/blog/day3/cover.jpg"
date: "2023-01-24"
author:
  name: Maria Araque
  picture: "/assets/blog/authors/maria.jpg"
ogImage:
  url: "/assets/blog/day3/cover.jpg"
---
Today, I am working on an alternative to the feedback form. I really like the idea of having a feedback form on the web; I think it is useful for me and makes my blog different from the rest. Initially, I dreamed on the idea of not having a database and storing the data directly to my email. I started a tutorial to use Nodemailer; however, there is a security risk that I don’t want to take.

What other alternatives do I have?

- Creating a back-end, storing the database on the web, and displaying it in a dashboard to which I have exclusive access... No, thank you. It's too complicated.
- Exploring other modules to collect data in my email… I still face a security risk.
- Using a third-party service like Google Forms… No, thank you. I prefer the clean look of mine.
- Utilizing a database integration.

I explored the option of using other modules such as SendGrid or Amazon SES; however, they are servers more focused on marketing and don't match my purpose. I found out about Gmail SMTP, but neither works for what I want, as I don’t want to collect user emails. I came to the conclusion that sending the data to my email is not the best idea, as it is more complex than I imagined, and I feel more experience is needed to use one of these tools.

I kept diving into my options and found Firebase. Firebase allows users to add data to the database without sharing any details, which means that I don’t need to collect users' details to gather their feedback. I asked more about it from ChatGPT and also looked into its documentation. So far, it seems to be the better option for my project. Tomorrow, I’ll be integrating Firebase into my project.