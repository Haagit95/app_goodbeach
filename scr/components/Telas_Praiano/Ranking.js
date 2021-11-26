import React from 'react';
import {View, Text} from 'react-native';

export default function Ranking () {
    <View>
        <Text>
        Ranking
        </Text>
    </View>
}

/*
class piie extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                amount: 40,
                svg: { fill: 'red' },
            },
            {
                key: 2,
                amount: 50,
                svg: { fill: 'blue' }
            },
          
        ]

        const Labels = ({ slices, height, width }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <Text
                        key={index}
                        x={pieCentroid[ 0 ]}
                        y={pieCentroid[ 1 ]}
                        fill={'white'}
                        textAnchor={'middle'}
                        alignmentBaseline={'middle'}
                        fontSize={24}
                        stroke={'black'}
                        strokeWidth={0.2}
                    >
                        {data.amount}
                    </Text>
                )
            })
        }

        return (
            <PieChart
                style={{ height: 200 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels/>
            </PieChart>
        )
    }

}
export default piie;
*/

