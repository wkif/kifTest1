<template>
  <div>
    <el-main class="kif">
      <div class="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item> 应用系统</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>
      </div>
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="16"
            ><div class="leftDiv">
              <div class="cglist">
                <div class="kcq">
                  <el-row>
                    <el-col :span="8" v-for="item in kcqList" :key="item.id"
                      ><div>
                        <el-card
                          class="kcqcard"
                          shadow="hover"
                          :body-style="{ 'background-color': item.color }"
                        >
                          <i :class="item.icon"></i>

                          <h3>{{ item.name }}</h3>
                        </el-card>
                      </div></el-col
                    >
                  </el-row>
                  <div class="p">
                    <p>
                      课程墙简介：
                      网络空间构建系统的专业课程墙进行学生学习过程的记录，提高学生专业认识度的同时，明确落实教师责任制，形成全面公开化的监管制度。解决工程教育注重过程培养的问题，形成可观测、可评价培养过程证据链。信息类计算机科学与技术、通信工程、自动化三个专业全部都在本校主页建立了网络空间，形成规模化的“网络空间课程墙”。
                    </p>
                  </div>
                </div>
              </div>
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
      kcqList: [
        {
          id: 1,
          icon: "el-icon-s-custom",
          name: "计算机科学与技术",
          color: "#b22929",
        },
        {
          id: 2,
          icon: "el-icon-s-grid",
          name: "软件工程",
          color: "#dd9222",
        },
        {
          id: 3,
          icon: "el-icon-umbrella",
          name: "网络空间安全",
          color: "#b22929",
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
      .cglist {
        //   background-color: wheat;
        //   height: 60px;
        .kcq {
          .kcqcard {
            margin: 10px;
            color: white;
          }
          .p {
            background-color: #f2f2f2;
            padding: 10px;
          }
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