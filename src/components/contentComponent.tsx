import { View } from 'react-native';
import { AlarmeComponent } from './alarmeComponent';
import { DashboardComponent } from './dashboardComponent';

export function ContentController(props) {
    const itemChoice = {
        dashboard: <DashboardComponent />,
        alarme: <AlarmeComponent />
    }
    return <View style={{ flex: 1 }}>{itemChoice[props.option]}</View>;
}