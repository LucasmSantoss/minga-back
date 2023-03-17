import app from "../app.js"
import chai from "chai"
import { it } from "mocha"
import request from "supertest"

const assert = chai.assert
const expect = chai.expect

describe("Prueba sobre /manga", () =>{
    it("GET /manga debe ser un objetid", async () =>{
        const response = await request(app).get("/api/manga/:id")
    })
})