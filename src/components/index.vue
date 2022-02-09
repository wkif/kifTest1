<template>
  <div>
    <el-container>
      <el-header height="220px">
        <div class="headImg kif">
          <el-image
            style="height: 171px"
            src="https://jxcglcq.xtu.edu.cn/dfiles/16294/skin/jxcglcq2019/logo.jpg"
            fit="contain "
          ></el-image>
        </div>

        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          router
          @select="handleSelect"
          background-color="#0063c8"
          text-color="#ffffff"
          active-text-color="#dd924d"
        >
          <template v-for="item in routeData">
            <el-menu-item :key="item.id" :index="item.url">{{
              item.name
            }}</el-menu-item>
          </template>
          <!--         
          <el-menu-item index="1">
            <router-link to="/">
              <span>网站首页</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/Presentation_of_results">
              <span>成果介绍</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">佐证材料</el-menu-item>
          <el-menu-item index="4">理论成果</el-menu-item>
          <el-menu-item index="5">授权专利</el-menu-item>
          <el-menu-item index="6">应用系统</el-menu-item>
          <el-menu-item index="7">成果立项文件</el-menu-item> -->

          >
        </el-menu>
      </el-header>

      <!-- 子页面展示部分 -->
      <router-view />

      <el-footer height="150px">
        <el-row>
          <el-col :span="12">
            <div class="grid-content">
              <el-image
                style="height: 100%"
                src="https://jxcglcq.xtu.edu.cn/dfiles/16294/skin/jxcglcq2019/footerbg.jpg"
                fit="contain"
              ></el-image>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-row>
                <el-col :span="24">
                  <div class="grid-content-link">
                    友情链接：<a
                      style="color: white"
                      href="http://www.jxcg.edu.cn/"
                      >教育部高等教育国家级教学成果奖励网</a
                    >
                    <a style="color: white" href="https://www.xtu.edu.cn/"
                      >湘潭大学</a
                    >

                    <a style="color: white" href="http://www.xtu.edu.cn/"
                      >教务处</a
                    >
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content-link">
                    湘潭大学版权所有　　　　网址：http://xxxx 地址：中国湖南湘潭
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      activeIndex: "1",
      routeData: [
        {
          id: 1,
          name: "首页",
          url: "/",
        },
        {
          id: 2,
          name: "成果介绍",
          url: "/Presentation_of_results",
        },
        { id: 3, name: "佐证资料", url: "/Supporting_materials" },
        { id: 4, name: "理论成果", url: "/Theoretical_results" },
        { id: 5, name: "授权专利", url: "/Authorized_patents" },
        { id: 6, name: "应用系统", url: "/application_system" },
        { id: 7, name: "成果立项文件", url: "/Project_approval_document" },
        {
          id: 8,
          name: "新闻报道",
          url: "/News_reports",
        },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {},
};
</script>

<style lang="less" rel="stylesheet/less" >
.kif {
  margin-left: 250px;
  margin-right: 250px;
}
.el-container {
  .el-header {
    .headImg {
    }
  }

  .el-footer {
    background-color: #004cb7;
    .grid-content-link {
      text-align: center;
      color: white;
      margin-top: 40px;
    }
  }
}
.imgtitle {
  opacity: 0.3;
  background-color: #e0e0e0;
}
</style>
