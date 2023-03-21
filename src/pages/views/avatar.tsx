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
                </DocumentationContainer>
            </Box>
        </Container>
    );
}
