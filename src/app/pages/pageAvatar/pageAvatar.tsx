import { Avatar } from "../../shared/components";
import Properties from "../properties/properties";
import {
     Box,
     Container,
     Content,
     Detail,
     DocumentationContainer,
     H2,
     H5,
     SmallDetail,
     Table,
     TableRow,
} from "../styles";

export function PageAvatar() {
  const label = '<Avatar size="small" label="JC" />';
  const icon = '<Avatar size="small" />';
  const image = '<Avatar size="small" image="image"/>';
  const active = '<Avatar size="medium" active="on | off"/>';

     const dataProps = [
          {
               name: "label",
               type: "string",
               description: "Defines the initial to display",
          },
          {
               name: "icon",
               type: "string",
               description: "Defines the icon to display",
          },
          {
               name: "size",
               type: "string",
               description: "Size of the element, valid options are small, medium and large",
          },
          {
               name: "active",
               type: "boolean",
               description: "Logged in user indicator",
          }
     ];

     return (
          <Container>
               <H2>Avatar</H2>
               <Box>
                    <H5>Documentation</H5>
                    <DocumentationContainer>
                    <p>Avatar represents people using icons, labels and images.</p>
          <Content>
            <h3>Label</h3>
            <SmallDetail>
              It is with the label property, showing only the user's initials.
            </SmallDetail>
            <Detail>{label}</Detail>
            <div className="flex align-items-center gap-2">
              <Avatar size="small" label="JC" />
              <Avatar size="medium" label="JC" />
              <Avatar size="large" label="JC" />
            </div>
          </Content>
          <Content>
            <h3>Icon</h3>
            <SmallDetail>
              It is set with the icon property, showing only one icon as user
              image.
            </SmallDetail>
            <Detail>{icon}</Detail>
            <div className="flex align-items-center gap-2">
              <Avatar size="small" />
              <Avatar size="medium" />
              <Avatar size="large" />
            </div>
          </Content>

          <Content>
            <h3>Image</h3>
            <SmallDetail>
              It is set with the image property, showing an image of the user.
            </SmallDetail>
            <Detail>{image}</Detail>
            <div className="flex align-items-center gap-2">
              <Avatar
                size="small"
                image="https://avatars.githubusercontent.com/u/2578009?s=80&v=4"
              />
              <Avatar
                size="medium"
                image="https://avatars.githubusercontent.com/u/53920655?v=4"
              />
              <Avatar
                size="large"
                image="https://avatars.githubusercontent.com/u/39253660?v=4"
              />
            </div>
          </Content>

          <Content>
            <h3>Active</h3>

            <Detail>{active}</Detail>
            <div className="flex align-items-center gap-2">
              <Avatar
                size="medium"
                image="https://avatars.githubusercontent.com/u/39253660?v=4"
                active="on"
              />
              <Avatar
                size="medium"
                active="on"
              />
              <Avatar size="medium" label="JC" active="off" />
            </div>
          </Content>
                         <br />
                         <Properties data={dataProps} />
                    </DocumentationContainer>
               </Box>
          </Container>
     );
}
