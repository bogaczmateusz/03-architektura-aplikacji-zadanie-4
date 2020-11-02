import React from 'react';

import { Card } from 'components/Card';

function App() {
    return (
        <div>
            <Card
                headline="This is a headline"
                image="https://picsum.photos/500/300"
                excerpt="This is a short card destiption."
                showMore="This is a long card destiption, lorem ipsum dolor sit amet. This is a long card destiption, lorem ipsum dolor sit amet. This is a long card destiption, lorem ipsum dolor sit amet."
            />
        </div>
    );
}

export default App;
