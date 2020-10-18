# The Dixie Project

The site is live at [https://ss16118.github.io/the-dixie-project](https://ss16118.github.io/the-dixie-project).

---

This site displays all the blog entries which my father, who passed away in 2019, wrote and published on BlogBus (博客大巴), a Chinese Blog hosting provider that was shut down in 2018. Most posts shown here are actually more like tweets. Some express my father's opinions and feelings on certain subjects, and others are simply quotes from a book or lyrics from a song that he really enjoyed. Although my father was a translator and diplomat by profession, he was interested in quite a few other things, such as photography, video games, movies, and reading. Therefore, the topics of his posts were fairly diverse. Among all the areas that he dabbled in, IT was the subject he was truly into. Frankly speaking, I probably would not have chosen to study computer science without his guidance. In short, this site was built as a memorial to him, and I plan to expand it some day.

The website is written in ReactJS, and only serves static content. The blog posts come from the backup file of my father's blog, which is named *howe-blog.xml*, and stored in the *public* folder. Since XML files are not easily manipulated, the blog file is first parsed to Json. For those BlogBus users who also want to rebuild their personal blogs from backup xml files, the format of the XML file is as follows, and I hope this project can be of some help.

```XML
<blogbuscom dtype="BlogData" SchemaVersion="1.1" Creator="BlogBus.Com BlogSystem V4.0">
// The datatype and origin of the file
    <description> // Blog description
        <blogname>Blog name (e.g. Siyuan's Blog)</blogname>
        <domainname>Domain name of the blog (e.g. sunnantechnology.blogbus.com)</domainname>
        <exporttime>The time at which the file was exported, format: 2008-12-20 15:43:26</exporttime>
    </description> // End of blog description
    <log> // Blog
        <title>Blog post title (e.g. Introduction to ReactJS)</title>
        <status>Status of the post (0: Hide, 1: Display normally, 3: Sticky)</status>
        <allowcomment>Whether this post allows comments (Y: Yes, N: No)</allowcomment>
        <allowping>Whether this post is allowed to be referenced (Y: Yes, N: No)</allowping>
        <allowlinks>Whether this post is allowed to be linked to (Y: Yes, N: No)</allowlinks>
        <writer>Name of the author</writer>
        <sort>The category to which the post belongs</sort>
        <content>Main content of the post</content>
        <excerpt>Excerpt of the post</excerpt>
        <tags>Tags</tags>
        <logdate>The time at which this post is published, format: 2008-04-17 13:40:00</logdate>
        <comments> // Start of comments
            <comment> // Start of a comment
                <email>Email address of the commenter</email>
                <homepage>Homepage of the commenter (if the commenter also has BlogPost comment)</homepage>
                <createtime>The time at which this comment was created, format: 2008-12-19 21:45:48</createtime>
                <nicename>The username of the commenter</nicename>
                <commenttext>Content of the comment</commenttext>
            </comment> // End of a comment
            <comment>...</comment> // Another comment
        </comments> // End of comments
    </log> // End of blog 
    <log>...</log> // Another blog
</blogbuscom> // End of the file
```
---

### To Do
- Use lazy loading to optimize the loading process.
- Create a proper backend for the blog so that new comments can be added.
- Optimize user interface on the mobile version of the website.

