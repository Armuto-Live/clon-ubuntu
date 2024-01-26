import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import RssFeedIcon from "@mui/icons-material/RssFeed";
const ListIConsContent = styled("ul")(({ theme }) => ({
  marginTop: "1rem",
  marginBottom: "1.5rem",
  display: "flex",
  [theme.breakpoints.up('xs')]:{
    justifyContent:"flex-end",
  }
}));
const ListIConItem = styled("li")(({ theme }) => ({
  display: "inline-block",
  justifyContent:"center",
  lineHeight: "1rem",
  marginTop: ".5rem",
  marginRight: "1rem",
  width: "2rem",
  height: "2rem",
}));

const ListIConItemLink = styled(Link)(({ theme }) => ({
  width: "2rem",
  height: "2rem",
}));

const SvgIcon = styled("svg")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "inherit",
}));
const SvgIconGroup = styled("g")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const SvgIconGroupSVG = styled("svg")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const CircleIcon = styled("path")(({ theme }) => ({
  fill: "#666",
}));

const Icon = styled("path")(({ theme }) => ({
  fill: "#e5e5e5",
}));
export const ListIcons = () => {
  return (
    <ListIConsContent>
      <ListIConItem>
        <ListIConItemLink>
          <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 375 374.9999"
          >
            <g>
              <CircleIcon d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 "></CircleIcon>
            </g>
            <SvgIconGroup>
              <SvgIconGroupSVG
                xmlns="http://www.w3.org/2000/svg"
                x="10%"
                y="10%"
                height="80%"
                width="80%"
                viewBox="0 0 50 50"
              >
                <Icon d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></Icon>
              </SvgIconGroupSVG>
            </SvgIconGroup>
          </SvgIcon>
        </ListIConItemLink>
      </ListIConItem>

      <ListIConItem>
        <ListIConItemLink>
          <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 375 374.9999"
          >
            <g>
              <CircleIcon d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 "></CircleIcon>
            </g>
            <SvgIconGroup>
              <SvgIconGroupSVG
                xmlns="http://www.w3.org/2000/svg"
                height="600"
                width="600"
                viewBox="0 0 50 50"
              >
                <Icon d="M18.632 5.102c-2.91 0-4.904 1.776-4.904 5.04v2.55h-3.293v3.814h3.293V26.87c1.353-.18 2.678-.53 3.942-1.045v-9.31h3.285l.492-3.812h-3.784v-2.18c0-1.104.357-2.238 1.894-1.855h2.02V5.252c-.978-.103-1.96-.154-2.943-.15h-.002z"></Icon>
              </SvgIconGroupSVG>
            </SvgIconGroup>
          </SvgIcon>
        </ListIConItemLink>
      </ListIConItem>

      <ListIConItem>
        <ListIConItemLink>
          <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 375 374.9999"
          >
            <g>
              <CircleIcon d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 "></CircleIcon>
            </g>

            <SvgIconGroup>
              <SvgIconGroupSVG
                xmlns="http://www.w3.org/2000/svg"
                x="2%"
                y="1%"
                height="550"
                width="550"
                viewBox="0 0 50 50"
              >
                <Icon d="M7 8.512v16.38c0 .758.63 1.37 1.404 1.37h16.192c.775 0 1.404-.612 1.404-1.37V8.512c0-.755-.63-1.37-1.404-1.37H8.404C7.63 7.143 7 7.757 7 8.513zm5.76 14.636H9.89v-8.634h2.87v8.634zm-1.435-9.812h-.02c-.962 0-1.585-.663-1.585-1.492 0-.847.642-1.492 1.624-1.492s1.586.645 1.604 1.492c0 .83-.623 1.492-1.623 1.492zm3.022 9.812s.038-7.824 0-8.634h2.87v1.252h-.02c.38-.59 1.058-1.454 2.607-1.454 1.888 0 3.303 1.234 3.303 3.885v4.95h-2.87V18.53c0-1.162-.415-1.953-1.453-1.953-.793 0-1.265.534-1.472 1.05-.076.184-.095.44-.095.7v4.82h-2.87z"></Icon>
              </SvgIconGroupSVG>
            </SvgIconGroup>
          </SvgIcon>
        </ListIConItemLink>
      </ListIConItem>

      <ListIConItem sx={{marginRight:"0"}}>
        <ListIConItemLink>
          <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 375 374.9999"
          >
            <g>
              <CircleIcon d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 "></CircleIcon>
            </g>
            <SvgIconGroup>
              <SvgIconGroupSVG
                xmlns="http://www.w3.org/2000/svg"
                x="16%"
                y="10%"
                height="80%"
                width="80%"
                viewBox="0 0 50 50"
              >
                <RssFeedIcon sx={{ color: "#e5e5e5" }} />
              </SvgIconGroupSVG>
            </SvgIconGroup>
          </SvgIcon>
        </ListIConItemLink>
      </ListIConItem>
    </ListIConsContent>
  );
};
