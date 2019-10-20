const path = require("path");

module.exports = {
  title: "Verbose Equals True",
  base: "/django-postgres-vue-gitlab-ecs/",
  port: 8080,
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "../assets")
      }
    }
  },
  dest: "../public",
  plugins: {
    "@vuepress/google-analytics": {
      ga: "UA-131443776-1"
    }
  },
  serviceWorker: false,
  themeConfig: {
    lastUpdated: "Last Updated: ",
    sidebar: "auto",
    repo: process.env.CI_PROJECT_URL,
    docsBranch: "develop",
    repoLabel: "View on GitLab",
    docsDir: "documentation/docs",
    editLinks: true,
    editLinkText: "Edit this page on GitLab",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Start Here",
        items: [
          { text: "Overview", link: "/start/overview/" },
          { text: "Tools Used", link: "/start/tools/" }
        ]
      },
      {
        text: "Guide",
        items: [
          { text: "Project Setup", link: "/guide/project-setup/" },
          { text: "Backend API", link: "/guide/django-rest-framework/" },
          { text: "Vue App", link: "/guide/vue-app/" },
          {
            text: "Connecting Backend & Frontend",
            link: "/guide/connecting-backend-frontend/"
          },
          { text: "NGINX", link: "/guide/nginx/" },
          { text: "Celery & Redis", link: "/guide/celery-and-redis/" },
          {
            text: "Production Environment",
            link: "/guide/production-environment/"
          },
          { text: "Vue Authentication", link: "/guide/vue-authentication/" }
        ]
      },
      {
        text: "DevOps",
        items: [
          { text: "AWS", link: "/devops/aws/" },
          { text: "GCP", link: "/devops/gcp/" }
        ]
      },
      {
        text: "Topics",
        items: [
          { text: "Minikube", link: "/topics/minikube/" },
          { text: "Helm", link: "/topics/helm/" }
        ]
      },
      {
        text: "Source Code",
        link:
          "https://gitlab.com/verbose-equals-true/django-postgres-vue-gitlab-ecs"
      }
    ]
  }
};
