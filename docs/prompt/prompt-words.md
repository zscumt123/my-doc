# 常用提示词



## AI来设计UI


``` markdown
#角色
你是一位资深产品经理、交互设计师、UI设计师

#任务
本次任务的最终目标是生成一套手机APP的UI设计图，首先在当前项目目录创建task.md文件，列举全部待办事项，每完成一个待办事项就编辑task.md文件，使用✅更新对应事项的完成状态，按照顺序依次完成待办直到所有待办事项均变为完成状态。

待办事项1：产品功能设计
- 初始信息：我是你的产品设计助手，现在请你告诉我，你想开发什么样的产品吧~
- 分析用户发送的信息，对不明确的细节进行追问
- 结合追问得到的答案，加以详细描述形成【产品设计文档.md】文件

待办事项2：交互设计
结合{待办事项1}输出的最终功能，确定该产品包含的所有页面，以下方示例格式输出全部页面的信息。
示例格式：
<页面名称>
用途：<页面的主要作用>
核心功能：<列出该页面包含的主要功能>

所有页面的信息输出完成后，更新【产品设计文档.md】，

待办事项3：UI设计
- 根据【产品设计文档.md】，同时遵守下方{UI设计风格}和{UI设计规格}，为每个设计图创建独立的html文件。

全部页面的html文件输出完成后，中断任务，提示用户输出“继续”指令

待办事项4：提示用户输入“继续”指令


待办事项5：创建一个UI.html文件
- UI.html页面的整体背景色为#f6f6f6
- 使用iframe技术将所有页面以适当的网格排列在UI.html里面，每个iframe的宽度固定为400px，高度固定为850px，保证每张设计图完整显示出来，不会被裁切或遮挡。
- iframe的背景色为##f6f6f6

待办事项6：自检代码
依次检查每个页面的html文件，
检查：强制隐藏所有滚动条
检查：设计图尺寸为 375x812PX
检查：信号栏与标题栏背景色必须一致（可以都是透明）
检查：图标和其他样式调用方式
检查：底部tab栏必须为白色填充，100%不透明度。


待办事项7：检查UI.html文件
检查UI.html文件的全部代码，删除iframe之外的多余装饰性元素，每张设计图的内部已经带有了mock up的样式代码，UI.html内的iframe不需要带有mock up的样式，如果有也需要进行删除。


#UI设计风格
优雅的清新主义美学与功能的完美平衡;
清新柔和的渐变配色与品牌色系浑然一体;
恰到好处的留白设计;
轻盈通透的沉浸式体验;
信息层级通过微妙的阴影过渡与模块化卡片布局清晰呈现;
用户视线能自然聚焦核心功能;
精心打磨的圆角;
细腻的微交互;
舒适的视觉比例;
规范的间距；

#UI设计规格
1、单个设计图尺寸为 375x812PX，带有mock up模拟手机的样式。
2、图标:引用在线矢量图标库内的图标
3、图片: 使用Unsplash开源图片网站链接的形式引入
4、样式必须使用<link>标签引入 tailwindcss CDN来完成
5、状态栏显示时间、信号等模拟信息
6、信号栏与标题栏背景色必须一致（可以都是透明）
7、底部tab栏必须为白色填充，100%不透明度。
8、使用固定高度防止容器变形

#注意事项
1、mock up的颜色只能使用黑色
2、所有html中都强制隐藏滚动条

```


## 手绘风格海报


``` markdown

Create concise, visually structured notes on the topic '{{topic}}'. Notes must fit clearly within a {{orientation}} layout (horizontal/vertical), featuring:

- Moderate Font Size: Comfortable readability.
- Clear Structure:
  - Main points highlighted with "background colors" or "wavy underlines~".
  - Regular notes in standard ink.
  - Emphasis notes in a different ink color.
- Illustrations:
  - Include relevant sketches or hand-drawn style illustrations.
  - Allow fountain pen-style doodles or annotations directly on illustrations.
- Annotations:
  - Simulate notes, corrections, and additional quirky doodles resembling spontaneous annotations, using marker pen style.
  - Incorporate collage-style photo extracts relevant to the topic, annotated or doodled upon.
- Language Text Accuracy Constraint (Strict):
   - When generating text in '{{language}}', abide by recognized dictionaries and standard grammar rules.
   - For languages like 中文 (Chinese) or others with complex scripts:
     - Ensure each character or symbol is correct, standard, and used appropriately.
     - Double-check stroke order, avoid non-existent variants, and verify usage before finalizing the notes.

User Settings (to be defined before image generation):
- Topic: User-defined.
- Orientation: Horizontal or Vertical.
- Language: English/中文 or any chosen language.
- Color Scheme: Main notes, emphasis notes, highlight style.
- Illustration Style: Detailed hand-drawn, minimalist sketches, or annotated magazine/photo cut-outs.

Once parameters are set, generate notes in the chosen language adhering strictly to the selected formatting and visual guidelines.
```

## 3D艺术风格

``` json
{
  "art_style_profile":{
    "style_name":"Minimalist 3D Illustration",
    "visual_elements":{
      "shape_language":"Soft, rounded, chunky geometry with simplified contours and no sharp edges. Emphasis on friendly, tactile forms.",
      "colors":{
        "primary_palette":"Material-based natural tones (e.g., metallic silver, wooden brown, sky blue, ceramic white). When native material is vibrant, reduce saturation moderately for visual balance.",
        "accent_colors":"Used sparingly to highlight functional or interactive parts (e.g., buttons, handles, lids) — often in warm tones like orange, amber, or rust red.",
        "shading":"Smooth gradients with soft falloff, subtly defining form and volume without strong contrast.",
        "supplementary_colors":"Soft neutral hues (e.g., light beige, cool gray, cream) used for secondary elements to preserve focus on the main form."
      },
      "lighting":{
        "type":"Diffuse ambient light for overall clarity and soft dimensionality",
        "source_direction":"Top-right angled light source to gently model volume",
        "shadow_style":"Soft, elliptical shadows under object, low opacity to maintain lightness and spatial separation"
      },
      "materials":{
        "surface_texture":{
          "General":"Matte or lightly satin for a soft tactile look; minimal texture detail, but distinct material feel (e.g., metallic luster, glass clarity, wood grain hue)",
          "Glass":"Translucent with soft internal glow and diffused refraction at edges",
          "Metal":"Brushed or anodized look with subtle gradient highlights, no mirror reflections"
        },
        "reflectivity":"Low to medium depending on material — minimal gloss, no harsh highlights, always soft-edged"
      },
      "composition":{
        "object_presentation":"Single object centered with generous white space around it, floating or subtly grounded",
        "perspective":"Three-quarter top-side view to give depth and silhouette clarity",
        "background":"Solid neutral tone (e.g., warm gray, off-white, pale sand) — unobtrusive and harmonizing with object tones"
      },
      "typography":{
        "font_style":"Minimal geometric sans-serif (e.g., Inter, Helvetica Neue Light)",
        "text_placement":"Bottom-left corner, small size",
        "color":"Soft gray, blending subtly with the background for minimal visual interference"
      },
      "rendering_style":{
        "technique":"Clean 3D render with soft ambient occlusion and simplified geometry, no texture mapping",
        "detail_level":"Moderate — emphasizing form and color fidelity over micro-details",
        "consistency_rule":"All elements must share the same aesthetic: smooth edges, low-contrast shadows, material-faithful coloring, and a calming visual tone"
      }
    },
    "purpose":"To create clean, emotionally warm 3D visuals that feel natural yet simplified — ideal for tech, product design, lifestyle branding, and modern UI systems. It balances realism and minimalism for visual clarity and user-friendly tone."
}
}
```
