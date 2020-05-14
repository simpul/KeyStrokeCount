# Keystroke Count

在全局环境下统计按键的Nodejs项目，可以输出键盘的热力图和按键统计柱状图。

An Node.js project to globally count the key stroke and output the heatmap.



主框架用到的技术栈:  Nodejs + express

Main framework's technology stack: Nodejs + express



全局监听按键和生成热力图用到的第三方模块：[iohook](https://wilix-team.github.io/iohook/) + [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/)

I've used **[iohook](https://wilix-team.github.io/iohook/)** + **[heatmap.js](https://www.patrick-wied.at/static/heatmapjs/)** to achieve monitoring the key stroke and generate the heatmap



喜欢的话请给个⭐（别再下次一定了）

Star if you like it, thanks.


图片挂了的话，请看readmeIMG下的图片，按顺序排好了的
If the pictures here are cracked, please refer to the readmeIMG file (pictures sorted by order)

---

### 界面展示 Interface display

键盘热力图

keyboard heatmap

![image](https://github.com/simpul/KeyStrokeCount/blob/master/readmeIMG/1.png)



柱状图

histogram

![image](https://github.com/simpul/KeyStrokeCount/blob/master/readmeIMG/2.png)



命令行界面

CLi interface

![image](https://github.com/simpul/KeyStrokeCount/blob/master/readmeIMG/3.JPG)



---

### 使用方法 Instructions

鉴于这是一个Nodejs项目，在pc上跑需要借助Nodejs环境，因此需要配置一些环境才能让程序正常运行（没办法我是个前端工程师，目前会的技术有限，先凑合着用着吧TwT）

As an Nodejs project, you need Nodejs to run this program. (sorry that i am a front-end engineer and know limited technology stack TwT)



受限于iohook这个三方模块的限制，对Nodejs的版本有要求（并没有支持最新版本的），它支持的版本如下。但是我是用v10.14.1这个版本来开发的，其他的版本还没测试过，所以强烈建议按照v10.14.1这个版本的nodejs来运行。~~顺便提一句：~~mac系统存在兼容性问题，某些版本下只会监听到一次按键，这个是iohook插件的原因，上面的issues我看过了处理起来比较麻烦所以就先跳过了，这里对mac系统的同学说声抱歉（您也可以自行解决这个问题。当然也可以抱着可能能正常跑的心态去试试。）

Limited by the module **iohook**, it only compatible with Nodejs versions as below. I use v10.14.1 to develop this project so v10.14.1 is highly recommended for you. (I haven't test it on other Nodejs versions). And as for MacOS system, **iohook** have a bug (only catch one key stoke after you tap your keys many times) on some versions and it's quite troublesome to solve it. So i am sorry to (you can see the issues of **iohook** on the github to solve it, or just download and try it) delay this problem solving.

![image](https://github.com/simpul/KeyStrokeCount/blob/master/readmeIMG/4.JPG)



关于怎么安装node的特定版本，建议百度。不懂的小白也可以加我QQ（562778710）联系我。然后把项目拉下来后，在目录下打开命令行。（如果是windows 系统就打开文件目录假设是E:\simple\keyStrokeCount，鼠标在文件夹内按住shift键然后鼠标右键，选择“在此处打开Powershell窗口”），打开后顺序执行如下一系列的操作：

When your nodejs is ready, clone this project to your local and execute the commands as below through cmd or powershell. If you see the welcome title "KeyStroke", it means you can run it successfully!

```powershell
 node -v
 npm install
 npm start
```

node -v 是查看node版本，这里是v10.14.1。当你安装好了node的时候就会自带安装好npm，这个是负责管理node相关模块的管理器。npm install表示下载程序需要的相关依赖模块。最后npm start来执行程序，当你看到这个有逼格的欢迎标题就意味着程序能够成功跑起来啦！

![image](https://github.com/simpul/KeyStrokeCount/blob/master/readmeIMG/5.JPG)



在这个命令窗口下，你可以输入以下有效指令：

start      开始统计你的按键（程序打开不是就默认开始统计的）

total      查看一共按下了多少次键

reset     重置统计结果

view      打开浏览器查看热图和柱状图（目前是静态的，就是说需要刷新浏览器才能看到新的统计结果）

help       查看支持的有效指令和说明（英文的）

exit        退出程序



反正不懂就输入enter，查看全英文的帮助

On the Cli, you can enter 'help' to find all valid command

![image](https://github.com/simpul/KeyStrokeCount/blob/master/readmeIMG/6.JPG)



如果你真的很喜欢用这个程序，想要在命令行中直接运行而不是需要切换到这个目录下运行，可以在项目目录下执行：

``` po
npm install -global
```

下次无论是在哪个目录下打开命令行，只需要输入ksc(KeyStrokeCount的缩写)就能够直接运行啦*★,°*:.☆(￣▽￣)/$:*.°★* 。



If you want to run this program globally, you can run **npm install -global** to install it. Next time you only need to enter **ksc** (the abbreviation of KeyStrokeCount) and run it directly.

![image](https://github.com/simpul/KeyStrokeCount/blob/master/readmeIMG/7.JPG)

