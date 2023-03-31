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
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";

export default function BreadcrumbsPageView() {
    const breadcrumbs = "<Breadcrumbs />";
    const breadcrumbsStatic =
        "<Breadcrumbs static redirectTo={() => setInitialWorkspace(true)} homeName=Home />";
    return (
        <Container>
            <H2>Breadcrumbs</H2>
            <Box>
                <H5>Documentation</H5>
                <DocumentationContainer>
                    <p>
                        Shows contextual information about the page hierarchy.
                    </p>
                    <Content>
                        <h3>Basic</h3>
                        <Detail>{breadcrumbs}</Detail>
                        <Breadcrumbs />
                    </Content>
                    <br />

                    <Content>
                        <h3>Breadcrumb route to home</h3>
                        <Breadcrumbs
                            home={true}
                            homeLink="#/home"
                            homeName={"Início"}
                        />

                        <Detail>
                            <code>
                                &lt;Breadcrumbs home<code>&#123;</code>true
                                <code>&#125;</code> homeLink=<code>&#123;</code>
                                'topology/demo'<code>&#125;</code> homeName=
                                <code>&#123;</code>'Início'<code>&#125;</code>
                                /&gt;
                            </code>
                        </Detail>
                    </Content>
                    <Content>
                        <h3>Breadcrumb redirect to static</h3>
                        <Breadcrumbs
                            static
                            redirectTo={() => console.log(true)}
                            homeName="Home"
                        />

                        <Detail>{breadcrumbsStatic}</Detail>
                    </Content>
                    <Content>
                        <h3>Properties </h3>
                        <SmallDetail>Properties used here</SmallDetail>
                        <Table>
                            <TableRow>
                                <b>Name</b>
                                <b>Type</b>
                                <b>Description</b>
                            </TableRow>
                            <TableRow>
                                <div>home</div>
                                <div>boolean</div>
                                <div>
                                    Define if the component will have a home
                                </div>
                            </TableRow>
                            <TableRow>
                                <div>homeLink</div>
                                <div>string </div>
                                <div>Set the home route</div>
                            </TableRow>
                            <TableRow>
                                <div>homeName</div>
                                <div>string </div>
                                <div>Set the fixed route name</div>
                            </TableRow>
                            <TableRow>
                                <div>redirectTo</div>
                                <div>function </div>
                                <div>Insert fixed or Boolean routes</div>
                            </TableRow>
                            <TableRow>
                                <div>static</div>
                                <div>boolean </div>
                                <div>
                                    Defines the componentet as static, and needs
                                    redirectTo to inform the route
                                </div>
                            </TableRow>
                        </Table>
                    </Content>
                </DocumentationContainer>
            </Box>
        </Container>
    );
}
