import { AlarmeComponent } from "./alarmeComponent"
import { DashboardComponent } from "./dashboardComponent"

export function ContentController(props) {
    const itemChoice = {
        dashboard: <DashboardComponent />,
        alarme: <AlarmeComponent />
    }

    return itemChoice[props.option]
}