import { app, Runner } from "./index";
import { createPayment } from "./pay";
import { Request, Response } from "express";
import { handlerman } from "./webhook";

app.post('/payment', Runner(async ({body} : Request, res : Response) => {
    res.send(
        await createPayment(body.amount)
    )
}))
app.post('/hooks', Runner(handlerman))