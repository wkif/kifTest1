import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
import homepage from "@/components/homepage";
import Presentation_of_results from "@/components/Presentation_of_results";
import Supporting_materials from "@/components/Supporting_materials";
import Theoretical_results from "@/components/Theoretical_results";
import Authorized_patents from "@/components/Authorized_patents";
import application_system from "@/components/application_system";
import Project_approval_document from "@/components/Project_approval_document";
import News_reports from "@/components/News_reports";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
      children: [
        {
          path: "",
          component: homepage
        },
        {
          path: "Presentation_of_results",
          component: Presentation_of_results
        },
        {
          path: "Supporting_materials",
          component: Supporting_materials
        },
        {
          path: "Theoretical_results",
          component: Theoretical_results
        },
        {
          path: "Authorized_patents",
          component: Authorized_patents
        },
        {
          path: "application_system",
          component: application_system
        },
        {
          path: "Project_approval_document",
          component: Project_approval_document
        },
        {
          path: "News_reports",
          component: News_reports
        }
      ]
    }
  ]
});
