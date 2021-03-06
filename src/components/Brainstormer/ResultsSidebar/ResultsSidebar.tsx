import * as React from 'react';
import './ResultsSidebar.scss';
import { Collapse, Card, CardHeader } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';

function ResultsSection(props: ResultsSectionProps) {
    const { state, id, header } = props;

    const [selected, selectSection] = state;
    return (
        <Card>
            <CardHeader onClick={() => selectSection(id)} style={{ cursor: 'pointer' }}>
                {header}
            </CardHeader>
            <Collapse isOpen={selected === id}>
                <CardBody>
                    Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,
                    Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,
                </CardBody>
            </Collapse>
        </Card>
    );
}

interface ResultsSectionProps {
    header: string;
    results?: any;

    state: [number, React.Dispatch<React.SetStateAction<number>>];
    id: number;
}
export default function ResultsSidebar() {
    const state = React.useState(0);

    return (
        <section className="side-bar ResultsSection">
            <ResultsSection id={0} header="Web results" state={state} />
            <ResultsSection id={1} header="Image results" state={state} />
            <ResultsSection id={2} header="Item Three" state={state} />
            <ResultsSection id={3} header="Item Four" state={state} />
        </section>
    );
}
