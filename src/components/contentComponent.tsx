import { DashboardComponent } from "./dashboardComponent"

export function ContentController(props) {
    const itemChoice = {
        dashboard: <DashboardComponent />,
    }

    return itemChoice[props.option]
}