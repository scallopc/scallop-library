import { Block, Container } from "./styles";

export type ILoading = {
    blocked: boolean;
    value: any;
};

export function Loading({ blocked, value }: ILoading) {
    return (
        <Container blocked={blocked}>
            {/* <ProgressBar mode="indeterminate" value={value} /> */}
            <Block />
        </Container>
    );
}
