
import {FaGithub} from "react-icons/fa"
export default function() {
  return [
    {
      title: "Vote Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons"> <FaGithub/></i>',
      htmlAfter: ""
    },
    {
      title: "Latest News",
      htmlBefore: '<i class="material-icons"></i>',
      to: "/blog-posts",
    },
    {
      title: "Vote here ",
      htmlBefore: '<i class="material-icons"></i>',
      to: "/add-new-post",
    },
 
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons"></i>',
      to: "/user-profile-lite",
    },
    
  ];
}
