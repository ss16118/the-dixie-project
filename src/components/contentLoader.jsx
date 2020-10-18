/********************* XML Format *********************/
/*
<blogbuscom dtype="BlogData" SchemaVersion="1.1" Creator="BlogBus.Com BlogSystem V4.0">
// 导出文件的数据类型，版本和出处
    <description> // 博客描述
        <blogname>博客名称，例如：孙楠的技术讲堂</blogname>
        <domainname>博客地址，例如：sunnantechnology.blogbus.com</domainname>
        <exporttime>导出的时间，格式为：2008-12-20 15:43:26</exporttime>
    </description> // 描述结束
    <log> // 博客日志
        <title>日志标题，例如：Blogbus导出日志的XML文件格式分析</title>
        <status>日志状态，控制隐藏和置顶，隐藏为0，正常为1，置顶为2</status>
        <allowcomment>评论，Y为允许，N为不允许</allowcomment>
        <allowping>引用，Y为允许，N为不允许</allowping>
        <allowlinks>自动链接，Y为允许，N为不允许</allowlinks>
        <writer>作者姓名，可以为空</writer>
        <sort>分类，为什么用Sort，Catalog不是更好?</sort>
        <content>日志内容，包括html格式</content>
        <excerpt>日志摘要，包括html格式</excerpt>
        <tags>关键词，关键词之间用空格分隔</tags>
        <logdate>日志时间，格式为：2008-04-17 13:40:00</logdate>
        <comments> // 这个标记做什么用？可以省略吗？
            <comment> // 博客评论
                <email>评论者的邮件地址</email>
                <homepage>评论者的主页地址</homepage>
                <createtime>评论时间，格式为：2008-12-19 21:45:48</createtime>
                <nicename>评论者的姓名</nicename>
                <commenttext>评论的内容和回复，无html格式</commenttext>
            </comment> // 评论结束
            <comment>...</comment> // 更多评论
        </comments> // 这个标记做什么用？可以省略吗？
    </log> // 日志结束
    <log>...</log> // 更多日志
</blogbuscom> // 导出文件结束

*/
/*******************************************/

class ContentLoader {
  constructor(path) {
    this.blogDataPath = path;
  }

  async loadBlog() {
    let content = "";
    await fetch(this.blogDataPath)
      .then((response) => response.text())
      .then((text) => (content = text));
    return content;
  }

  /**
   * Partition the blog posts by year
   * @param posts: suppose posts is already in json form
   */
  partitionPostsByDate(posts) {
    const partitions = {};
    posts.forEach((post) => {
      const date = post["LogDate"][0];
      const year = parseInt(date.substring(0, 4));
      if (partitions[year] === undefined) {
        partitions[year] = {};
      }
      const month = parseInt(date.substring(5, 7));
      const partitionYear = partitions[year];
      if (partitionYear[month] === undefined) {
        partitionYear[month] = [post];
      } else {
        partitionYear[month].push(post);
      }
    });
    return partitions;
  }

  /**
   * Partition the blog posts by tags
   * @param posts: suppose posts is already in json form
   */
  partitionPostsByTags(posts) {
    const partitions = {};
    posts.forEach((post) => {
      const tags = post["Tags"][0].split(" ");
      tags.forEach((tag) => {
        tag = tag === "" ? "无标签" : tag;
        if (partitions[tag] === undefined) {
          partitions[tag] = [post];
        } else {
          partitions[tag].push(post);
        }
      });
    });
    return partitions;
  }
}

export default ContentLoader;
