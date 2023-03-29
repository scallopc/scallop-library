import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Icon, Span } from "./styles";

export function Breadcrumbs(props) {
  const paths = location.pathname;
  const pathsSplitted = paths.split("/");
  const clearPathsSplitted = pathsSplitted.filter((path) => {
    return path.length > 0 && path;
  });

  const redirect = (path: string) => {
    let empty = [];
    let pause = false;

    clearPathsSplitted.forEach((item) => {
      if (!pause) {
        empty.push(item);
        if (item == path) {
          pause = true;
        }
      }
    });
    let redirectPath = empty.join("/");
    window.location.replace("/" + redirectPath);
  };

  const redirectToHome = () => {
    window.location.replace("/" + props.homeLink);
  }

  return (
    <Container>
      {
        props.home &&  <Span onClick={() => redirectToHome()}>
        {props.homeName} <Icon className="icon-chevron" icon={faChevronRight} />
      </Span>
      }
      {clearPathsSplitted?.map((path, index) => {
        return (
          <Span onClick={() => redirect(path)} key={index}>
            {path} <Icon className="icon-chevron" icon={faChevronRight} />
          </Span>
        );
      })}
    </Container>
  );
}
