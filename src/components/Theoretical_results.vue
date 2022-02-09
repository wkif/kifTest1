<template>
  <div>
    <el-main class="kif">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item> 理论成果</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
      </div>
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="16"
            ><div class="leftDiv">
              <el-card class="newsbox-card" v-for="item in Data" :key="item">
                <div slot="header" class="clearfix">
                    <i class="el-icon-s-order"></i>
                  <span>{{ item.Maintitle }}</span>
                  <el-button style="float: right; padding: 3px 0" type="text"
                    >更多
                  </el-button>
                </div>
                <div  v-for="o in item.news" :key="o" class="text item newsBox">
                  {{ o.title }}
                </div>
              </el-card>
            </div></el-col
          >
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

      4
    </el-main>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
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
      Data: [
        {
          Maintitle: "网络学习空间",
          news: [
            {
              id: 1,
              title: "以证据为中心的课程学习形成性评价设计",
            },
            {
              id: 2,
              title: "基于贝叶斯网络的在线课程学习成果诊断与认证",
            },
            {
              id: 3,
              title: "工程教育学习成果开放徽章研究",
            },
          ],
        },
        {
          Maintitle: "学习成果区块链",
          news: [
            {
              id: 1,
              title:
                "Education application of blockchain technology： learning outcome and meta-diploma",
            },
            {
              id: 2,
              title: "工程教育学习产出区块链设计",
            },
          ],
        },
        {
          Maintitle: "工程教育评价方法",
          news: [
            {
              id: 1,
              title: "基于电感磁芯材料饱和特性的指标点达成度智能评价",
            },
            {
              id: 2,
              title: "智能车竞赛学习成果认知诊断模型",
            },
            {
              id: 3,
              title: "定性与定量相结合的毕业设计课程评价方法",
            },
          ],
        },
      ],
    };
  },
  methods: {},
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
    //   height: 1000px;
    //   background-color: bisque;
      .newsbox-card{
          margin: 30px;
          .newsBox{
              margin: 20px;
          }

      }
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
</style>