---
layout: page
title: All Posts
---

<br/>

 {% for post in site.posts %}
  <article>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
    <h5>
      <a href="{{ site.baseurl }}{{ post.url }}">
        {{ post.title }}
      </a>
    </h5>
  </article>
{% endfor %}
