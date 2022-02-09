<template>
  <div>
    <el-main class="kif">
      <div class="carouselBox">
        <el-carousel :interval="4000" type="card" height="280px">
          <el-carousel-item v-for="item in carouselData" :key="item">
            <el-image
              style="width: 100%"
              :src="item.url"
              fit="contain"
            ></el-image>
            <div class="imgtitle" style="height: 50px">{{ item.title }}</div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="indexTop">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <el-card class="topmessage-card" shadow="hover">
                <div slot="header" class="clearfix">
                  <i class="el-icon-s-management"></i>
                  <span>成果简介</span>
                  <el-button style="float: right; padding: 3px 0" type="text"
                    >更多》》</el-button
                  >
                </div>
                <div>
                  {{ Results_summary }}
                </div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12"
            ><div class="grid-content">
              <el-card class="topmessage-card" shadow="hover">
                <div slot="header" class="clearfix">
                  <i class="el-icon-s-management"></i>
                  <span>新闻报道</span>
                  <el-button style="float: right; padding: 3px 0" type="text"
                    >更多》》</el-button
                  >
                </div>
                <div>
                  <div class="Topnews">
                    <el-row>
                      <el-col :span="10"
                        ><div>
                          <div class="TopnewsImg">
                            <el-image
                              style="height: 150px"
                              :src="News_reports[0].imgUrl"
                              fit="contain"
                            ></el-image>
                          </div></div
                      ></el-col>
                      <el-col :span="14"
                        ><div>
                          <h4>{{ News_reports[0].title }}</h4>
                          {{ News_reports[0].content }}
                        </div></el-col
                      >
                    </el-row>
                  </div>
                  <div class="newsBox">
                    <div
                      class="news"
                      v-for="item in News_reports"
                      :key="item.time"
                    >
                      {{ item.time }}:{{ item.content }}
                    </div>
                  </div>
                </div>
              </el-card>
            </div></el-col
          >
        </el-row>
      </div>

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
    </el-main>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      carouselData: [
        {
          url: "https://jxcglcq.xtu.edu.cn/dfiles/16294/d/file/p/2019/04-11/1e4f27729146a2792b7c730a5660a471.jpg",
          title: "title",
        },
        {
          url: "https://jxcglcq.xtu.edu.cn/dfiles/16294/d/file/p/2019/04-11/1e4f27729146a2792b7c730a5660a471.jpg",
          title: "title",
        },
        {
          url: "https://jxcglcq.xtu.edu.cn/dfiles/16294/d/file/p/2019/04-11/1e4f27729146a2792b7c730a5660a471.jpg",
          title: "title",
        },
        {
          url: "https://jxcglcq.xtu.edu.cn/dfiles/16294/d/file/p/2019/04-11/1e4f27729146a2792b7c730a5660a471.jpg",
          title: "title",
        },
      ],
      Results_summary:
        "学校2012年入选教育部第一批教育信息化试点单位后，率先在信息类专业将工程教育认证理念和信息技术深度融合，促进工程教育专业认证标准实施作为重要试点内容进行研究、应用与推广。2017年教育部科技司专家组现场验收获评优秀，核心成果“应用网络学习空间促进工程教育专业认证标准实施”入选教育部科技司“教育信息化优秀案例集（2017）”。几年来，学校以激发信息类专业教师的创新创造能力为起点，深度融合“以学生为中心，产出为导向，持续改进”的OBE工程教育认证理念，以及网络空间、贝叶斯心理测量模型、区块链等信息技术，推动提升学生复杂工程问题解决能力的教育教学研究与实践，形成了卓有成效的“1133工程教育培养质量体系”，创新学生学习成果证据、评价和信任机制，为学分认定、消除学习边界、个性化培养等提供了质量保障。全校计算机科学与技术、自动化、通信工程等6个专业分别通过工程教育专业认证，成果得到了应用与验证。本成果 6 位完成人近 5 年主持省部级以 上教改项目 11 项，发表教改论文 21 篇，授权...",
      News_reports: [
        {
          title: "【知行网】利用空间教学破解工程教育专业认证之难1",
          imgUrl:
            "https://jxcglcq.xtu.edu.cn/dfiles/16294/d/file/p/2019/04-11/1e4f27729146a2792b7c730a5660a471.jpg",
          content:
            "1作为教育部第一批教育信息化试点高校，湘潭大学积极实施'网络学习空间与自主探究性学习模式探索'项...",

          time: "2019-04-01",
        },
        {
          title: "【知行网】利用空间教学破解工程教育专业认证之难2",
          imgUrl:
            "https://jxcglcq.xtu.edu.cn/dfiles/16294/d/file/p/2019/04-11/1e4f27729146a2792b7c730a5660a471.jpg",
          content:
            "2作为教育部第一批教育信息化试点高校，湘潭大学积极实施'网络学习空间与自主探究性学习模式探索'项...",

          time: "2019-04-02",
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
.kif {
  margin-left: 250px;
  margin-right: 250px;
}
.el-container {
  .el-main {
    // background-color: antiquewhite;
    // height: 1200px;
    .carouselBox {
      .el-carousel__item {
      }
    }
    .indexTop {
      margin-bottom: 30px;
      .grid-content {
        padding: 20px;

        .topmessage-card {
          height: 450px;
          .Topnews {
            // background-color: yellow;
            height: 180px;
          }
          .newsBox {
            // background-color: wheat;
            height: 100px;
            .news {
              padding: 8px;
            }
          }
        }

        .text {
          font-size: 14px;
        }

        .item {
          margin-bottom: 18px;
        }

        .clearfix:before,
        .clearfix:after {
          display: table;
          content: "";
        }
        .clearfix:after {
          clear: both;
        }
      }
    }

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
}
.imgtitle {
  opacity: 0.3;
  background-color: #e0e0e0;
}
</style>
