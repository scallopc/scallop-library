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
import Avatar from "../../components/avatar/avatar";

export default function AvatarsPageView() {
    const label = '<Avatar size="small" label="JC" />';
    const icon = '<Avatar size="small" />';
    const image = '<Avatar size="small" image="image"/>';
    const active = '<Avatar size="medium" active="on | off"/>';

    return (
        <Container>
            <H2>Avatar</H2>
            <Box>
                <H5>Documentation</H5>
                <DocumentationContainer>
                    <p>
                        Avatar represents people using icons, labels and images.
                    </p>
                    <Content>
                        <h3>Label</h3>
                        <SmallDetail>
                            It is with the label property, showing only the
                            user's initials.
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
                            It is set with the icon property, showing only one
                            icon as user image.
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
                            It is set with the image property, showing an image
                            of the user.
                        </SmallDetail>
                        <Detail>{image}</Detail>
                        <div className="flex align-items-center gap-2">
                            <Avatar
                                size="small"
                                image="https://avatars.githubusercontent.com/u/39253660?v=4"
                            />
                            <Avatar
                                size="medium"
                                image="https://avatars.githubusercontent.com/u/39253660?v=4"
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
                            <Avatar size="medium" active="on" />
                            <Avatar size="medium" label="JC" active="off" />
                        </div>
                    </Content>

                    <Content>
                        <h3>Properties </h3>
                        <SmallDetail>
                            Use this attribute to compose the component
                        </SmallDetail>
                        <Table>
                            <TableRow>
                                <b>Name</b>
                                <b>Type</b>
                                <b>Description</b>
                            </TableRow>
                            <TableRow>
                                <div>label</div>
                                <div>string</div>
                                <div>Defines the initial to display</div>
                            </TableRow>
                            <TableRow>
                                <div>icon</div>
                                <div>string</div>
                                <div>Defines the icon to display</div>
                            </TableRow>
                            <TableRow>
                                <div>size</div>
                                <div>string</div>
                                <div>
                                    Size of the element, valid options are
                                    "small", "medium" and "large"
                                </div>
                            </TableRow>
                            <TableRow>
                                <div>active</div>
                                <div>string</div>
                                <div>
                                    Logged in user indicator, 'on' | 'off'
                                </div>
                            </TableRow>
                        </Table>
                    </Content>
                </DocumentationContainer>
            </Box>
        </Container>
    );
}
