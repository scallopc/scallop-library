
import Button from "../../components/button/button";
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

export default function PageButtons() {
  const primary = '<Button variant="primary" size="small" label="button name" />'
  const outline = '<Button variant="outline" size="medium" label="button name" />'
  const text = '<Button variant="text" size="large" />'
  const textIcon = '<Button variant="text" size="small" label="button name" icon="fa-regular fa-plus" />'
  const disabled = '<Button variant="primary" size="small" label="button name" disabled />'


  return (
    <Container>
      <H2>Button</H2>
      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <Content>
            <h3>Primary</h3>
            <Detail> {primary}</Detail>
            <div className="flex align-items-center gap-2">
              <Button variant="primary" size="small" label="Small" />
              <Button variant="primary" size="medium" label="Medium" />
              <Button variant="primary" size="large" label="Large" />
            </div>
          </Content>
          <Content>
            <h3>Outline</h3>
            <SmallDetail>
              Outline buttons display a border without a background initially
            </SmallDetail>
            <Detail> {outline}</Detail>
            <div className="flex align-items-center gap-2">
              <Button variant="outline" size="small" label="Small" />
              <Button variant="outline" size="medium" label="Medium" />
              <Button variant="outline" size="large" label="Large" />
            </div>
          </Content>
          <Content>
            <h3>Text</h3>
            <SmallDetail>
              Text buttons are displayed as textual elements
            </SmallDetail>
            <Detail> {text}</Detail>
            <div className="flex align-items-center gap-2">
              <Button variant="text" size="small" label="Small" />
              <Button variant="text" size="medium" label="Medium" />
              <Button variant="text" size="large" label="Large" />
            </div>
          </Content>
          <Content>
            <h3>With icon</h3>
            <SmallDetail>
              {" "}
              To display only an icon, do not insert label. The library used for
              icons is"FontAwesomeIcon"
            </SmallDetail>
            <Detail> {textIcon}</Detail>
            <div className="flex align-items-center gap-2">
              <Button
                variant="outline"
                size="medium"
                icon="fa-regular fa-plus"
                label="Medium"
              />
              <Button variant="primary" icon="fa-regular fa-plus" size="medium" />
            </div>
          </Content>
          <Content>
            <h3>Disabled</h3>
            <SmallDetail>To set the button as disabled</SmallDetail>
            <Detail>{disabled}</Detail>
            <div className="flex align-items-center gap-2">
              <Button
                variant="outline"
                size="medium"
                icon="fa-regular fa-plus"
                label="Medium"
                disabled
              />
            </div>
          </Content>

          <br />
          <Content>
          <h3>Properties </h3>
          <SmallDetail>
            We use some attributes to compose the component
          </SmallDetail>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Description</b>
              </TableRow>
              <TableRow>
                <div>variant</div>
                <div>string</div>
                <div>
                  Defines the button type, valid options are "primary",
                  "outline" and "text"
                </div>
              </TableRow>
              <TableRow>
                <div>disabled</div>
                <div>boolean</div>
                <div>
                  Defines if the button is disabled, valid options are "true" or
                  "false"
                </div>
              </TableRow>
              <TableRow>
                <div>size</div>
                <div>string</div>
                <div>
                  Size of the element, valid options are "small", "medium" and
                  "large"
                </div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
