
import { Grid } from "semantic-ui-react";

const Board = () => {

    return (
        <div>
            <p>Hey x its your turn</p>

            <Grid columns={3} centered>
                {
                    Array(9).fill(null).map((val, inddex) => (

                        <Grid.Column>
                            Hello
                        </Grid.Column>

                    ))
                }
            </Grid>
        </div>
    )

}

export default Board;