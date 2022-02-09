<template>
  <div>
    <el-main class="kif">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item> 佐证资料</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
      </div>
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="leftDiv">
              <h2>教学成果奖申报佐证材料</h2>
              <p class="one">
                <em class="blue">2019-04-10 </em><em class="blue"></em
                ><em class="gray">阅读量:2065</em>
              </p>
              <hr />
              <div>
                  <iframe style="width: 100%; height: 800px;" :src="src"></iframe>

              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="rightDiv">
              <el-card class="Newcard">
                <div slot="header" class="clearfix">
                  <span>栏目最近更新</span>
                </div>
                <div v-for="o in classlistData" :key="o" class="text item">
                  {{ o.content }}
                  <el-divider></el-divider>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </div>
</template>

<script>

export default {
  props: {},
  components: {  },
  data() {
    return {
      src: "../../static/test.pdf",
      isshowpdf: false,
      classlistData: [
        {
          id: 1,
          content: "教技函[2017]77号_教育部关于第一批",
        },
        {
          id: 2,
          content: "全国教育信息化优秀案例集（2017）",
        },
        {
          id: 3,
          content: "成果简介及主要解决的教学问题",
        },
        {
          id: 4,
          content: "应用网络学习空间促进工程教育专业认...",
        },
        {
          id: 5,
          content: "教学成果奖申报佐证材料",
        },
      ],
      newsData: {
        title: "成果简介及主要解决的教学问题",
        time: "2019-04-10",
        source: "",
        reading: 2536,
        content: [
          "　学校2012年入选教育部第一批教育信息化试点单位后，率先在信息类专业将工程教育认证理念和信息技术深度融合，促进工程教育专业认证标准实施作为重要试点内容进行研究、应用与推广。2017年教育部科技司专家组现场验收获评优秀，核心成果“应用网络学习空间促进工程教育专业认证标准实施”入选教育部科技司“教育信息化优秀案例集（2017）”。几年来，学校以激发信息类专业教师的创新创造能力为起点，深度融合“以学生为中心，产出为导向，持续改进”的OBE工程教育认证理念，以及网络空间、贝叶斯心理测量模型、区块链等信息技术，推动提升学生复杂工程问题解决能力的教育教学研究与实践，形成了卓有成效的“1133工程教育培养质量体系”，创新学生学习成果证据、评价和信任机制，为学分认定、消除学习边界、个性化培养等提供了质量保障。全校计算机科学与技术、自动化、通信工程等6个专业分别通过工程教育专业认证，成果得到了应用与验证。本成果 6 位完成人近 5 年主持省部级以 上教改项目 11 项，发表教改论文 21 篇，授权发明专利 1 项，软件著作权 2 项。",
          "深度融合信息技术形成开放、自动、可靠的的“1133工程教育培养质量体系”：即“一个目标”、“一个理念”、“三个机制”、“三个措施”。",
          "",
        ],
      },
    };
  },
  methods: {
    closepdf() {
      this.isshowpdf = false;
    },
    pdferr(errurl) {
      console.log(errurl);
    },
    openpdf() {
      this.isshowpdf = true;
    },
  },
  mounted() {},
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.el-main {
  //   height: 1500px;

  .breadcrumb {
    margin-top: 30px;
    padding: 20px;
  }

  .content {
    margin-top: 30px;
    .leftDiv {
      height: 1000px;
      padding: 20px;
      //   background-color: bisque;
    }
    .rightDiv {
      height: 1000px;
      //   background-color: #0387fc;
      .Newcard {
        .clearfix {
          background-color: #005fbe;
          padding: 10px;
          height: 50px;
          color: white;
        }
      }
    }
  }
}

h2 {
  font: normal 22px/35px "微软雅黑";
  color: #072885;
  text-align: center;
}
.one {
  font-szie: 12px;
  text-align: center;
}
p {
  text-indent: 2em;
}
.blue {
  color: #3d6cb0;
}
.gray {
  color: #666;
}
#num {
  color: #3d6cb0;
}
em {
  font-style: normal;
}
.two {
  font-family: "楷体_GB2312";
}
.four {
  font-weight: bold;
}
</style>