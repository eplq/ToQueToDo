import { describe, it, expect, afterEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/svelte"

import App from "../src/App.svelte"

describe("Test", () => {
    afterEach(() => cleanup())

    it("it renders", () => {
        render(App)

        const title = screen.getByText("preparado")

        expect(title).toBeTruthy()
    })
})
