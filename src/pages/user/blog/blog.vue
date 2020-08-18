<template>
	<div class="body">
		<div class="content">
			<div class="left">
				<el-input
					type="textarea"
					:autosize="{ minRows: 2 }"
					placeholder="请输入内容"
					v-model="html">
				</el-input>
			</div>
			<div class="right">
				<markdown-it-vue class="md-body" :content="html" :options="options" />
			</div>	
		</div>		
	</div>
</template>
<script>

	// 完整版
	import MarkdownItVue from 'markdown-it-vue'
	import 'markdown-it-vue/dist/markdown-it-vue.css'

	// 精简版
	// import MarkdownItVueLight from 'markdown-it-vue/dist/markdown-it-vue-light.umd.min.js'
	// import 'markdown-it-vue/dist/markdown-it-vue-light.css'
	export default {
		components: {
			MarkdownItVue,
			// MarkdownItVueLight
		},
		computed: {
			btn() {
				return this.$store.state.loading;
			}
		},
		data() {
			const str = '# markdown-it-vue\n' +
						'\n' +
						'## GitHub Table of Contents\n' +
						'\n' +
						'[toc]\n' +
						'\n' +
						'Note: Only `h2` and `h3` are shown in toc.\n' +
						'\n' +
						'## alter\n' +
						'\n' +
						'Markup is similar to fenced code blocks. Valid container types are `success`, `info`, `warning` and `error`.\n' +
						'\n' +
						'::: success\n' +
						'You have got it.\n' +
						':::\n' +
						'\n' +
						'::: info\n' +
						'You have new mail.\n' +
						':::\n' +
						'\n' +
						'::: warning\n' +
						'You have new mail.\n' +
						':::\n' +
						'\n' +
						'::: error\n' +
						'Staying up all night is bad for health.\n' +
						':::\n' +
						'\n' +
						'## mermaid charts\n' +
						'\n' +
						'### Flowchart\n' +
						'\n' +
						'[Flowchart Syntax](http://knsv.github.io/mermaid/#flowcharts-basic-syntax)\n' +
						'\n' +
						'```mermaid\n' +
						'graph TD;\n' +
						'    A-->B;\n' +
						'    A-->C;\n' +
						'    B-->D;\n' +
						'    C-->D;\n' +
						'```\n' +
						'\n' +
						'```\n' +
						'sequenceDiagram\n' +
						'    participant Alice\n' +
						'    participant Bob\n' +
						'    Alice->John: Hello John, how are you?\n' +
						'    loop Healthcheck\n' +
						'        John->John: Fight against hypochondria\n' +
						'    end\n' +
						'    Note right of John: Rational thoughts <br/>prevail...\n' +
						'    John-->Alice: Great!\n' +
						'    John->Bob: How about you?\n' +
						'    Bob-->John: Jolly good!\n' +
						'```\n' +
						'\n' +
						'## Definition list\n' +
						'\n' +
						'Term 1\n' +
						'  ~ Definition 1\n' +
						'\n' +
						'Term 2\n' +
						'  ~ Definition 2a\n' +
						'  ~ Definition 2b\n' +
						'\n' +
						'[Definition List Syntax](http://pandoc.org/README.html#definition-lists)\n' +
						'\n' +
						'\n' +
						'## AsciiMath\n' +
						'\n' +
						'Inline AsciiMath: `@(1/2[1-(1/2)^n])/(1-(1/2))=s_n@`\n' +
						'\n' +
						'```AsciiMath\n' +
						'oint_Cx^3 dx+4y^2 dy\n' +
						'\n' +
						'2=(((3-x)xx2)/(3-x))\n' +
						'\n' +
						'sum_(m=1)^oosum_(n=1)^oo(m^2 n)/(3^m(m3^n+n3^m)\n' +
						'```\n' +
						'\n' +
						'```ASCIIMath\n' +
						'phi_n(kappa) = 1/(4pi^2 kappa^2)\n' +
						' int_0^oo (sin(kappa R))/(kappa R)\n' +
						' del/(del R)\n' +
						'[R^2 (del D_n (R))/(del R)] del R\n' +
						'```\n' +
						'\n' +
						'[AsciiMath Documentation](http://asciimath.org/)\n' +
						'\n' +
						'## Subscript: H~2~O\n' +
						'\n' +
						'You can also use inline math: `$H_2O$`\n' +
						'\n' +
						'\n' +
						'## Superscript: 29^th^\n' +
						'\n' +
						'You can also use inline math: `$29^{th}$`\n' +
						'\n' +
						'\n' +
						'## Emoji: :panda_face: :sparkles: :camel: :boom: :pig:\n' +
						'\n' +
						'[Emoji Cheat Sheet](http://www.emoji-cheat-sheet.com/)\n' +
						'\n' +
						'## Fontawesome: :fa-cab: :fa-flag: :fa-bicycle: :fa-leaf: :fa-heart:\n' +
						'\n' +
						'[All the Font Awesome icons](http://fontawesome.io/icons/)\n' +
						'\n' +
						'## Echarts\n' +
						'\n' +
						'[Documentation for Echarts](http://echarts.baidu.com)\n' +
						'\n' +
						'The width and height is the size for chart container.\n' +
						'\n' +
						'```echarts\n' +
						'{\n' +
						'  "width": 500,\n' +
						'  "height": 400,\n' +
						'  "series": [\n' +
						'    {\n' +
						'      "name": "访问来源",\n' +
						'      "type": "pie",\n' +
						'      "radius": "55%",\n' +
						'      "data": [\n' +
						'        {\n' +
						'          "value": 235,\n' +
						'          "name": "视频广告"\n' +
						'        },\n' +
						'        {\n' +
						'          "value": 274,\n' +
						'          "name": "联盟广告"\n' +
						'        },\n' +
						'        {\n' +
						'          "value": 310,\n' +
						'          "name": "邮件营销"\n' +
						'        },\n' +
						'        {\n' +
						'          "value": 335,\n' +
						'          "name": "直接访问"\n' +
						'        },\n' +
						'        {\n' +
						'          "value": 400,\n' +
						'          "name": "搜索引擎"\n' +
						'        }\n' +
						'      ]\n' +
						'    }\n' +
						'  ]\n' +
						'}\n' +
						'```\n' +
						'\n' +
						'## code\n' +
						'\n' +
						'```bash\n' +
						'npm install markdown-it-vue\n' +
						'```\n' +
						'\n' +
						'## table\n' +
						'\n' +
						'| First Header  | Second Header |\n' +
						'| ------------- | ------------- |\n' +
						'| Content Cell  | Content Cell  |\n' +
						'| Content Cell  | Content Cell  |\n' +
						'\n' +
						'## flowchart.js\n' +
						'\n' +
						'```flowchart.js\n' +
						'st=>start: Start|past:>http://www.google.com[blank]\n' +
						'e=>end: End:>http://www.google.com\n' +
						'op1=>operation: My Operation|past\n' +
						'op2=>operation: Stuff|current\n' +
						'sub1=>subroutine: My Subroutine|invalid\n' +
						'cond=>condition: Yes\n' +
						'or No?|approved:>http://www.google.com\n' +
						'c2=>condition: Good idea|rejected\n' +
						'io=>inputoutput: catch something...|request\n' +
						'para=>parallel: parallel tasks\n' +
						'\n' +
						'st->op1(right)->cond\n' +
						'cond(yes, right)->c2\n' +
						'cond(no)->para\n' +
						'c2(true)->io->e\n' +
						'c2(false)->e\n' +
						'\n' +
						'para(path1, bottom)->sub1(left)->op1\n' +
						'para(path2, right)->op2->e\n' +
						'\n' +
						'st@>op1({"stroke":"Red"})@>cond({"stroke":"Red","stroke-width":6,"arrow-end":"classic-wide-long"})@>c2({"stroke":"Red"})@>op2({"stroke":"Red"})@>e({"stroke":"Red"})\n' +
						'```\n'
			return {
				// html:'# markdown-it-vue ',
				html:str,
				options: {
					markdownIt: {
						linkify: true
					},
					linkAttributes: {
						attrs: {
						target: '_blank',
						rel: 'noopener'
						}
					}
				}
				
			};
		},
		watch: {
			html(val) {
				console.log(val)
			}
		},
		methods: {
			setMakedown() {
                // this.html = converter.makeHtml('# 这是一个标题')
            }
		}
	}
</script>

<style lang="scss" scoped>
	
	.body {
		width: 100%;
		height:100%;
		flex: 1;
		.content {
			width:1300px;
			display: flex;
			justify-content: space-between;
			margin: 30px auto;
			.left {
				width:640px;
			}
			.right {
				width: 640px;
				padding:20px;
				background:#fff;
			}
		}
	}
</style>