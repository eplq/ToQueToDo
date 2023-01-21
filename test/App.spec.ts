import { describe, it, expect, afterEach } from "vitest"
import { render, screen, cleanup } from "@testing-library/svelte"

import App from "../src/App.svelte"

describe("Test", () => {
    afterEach(() => cleanup())

    it("it renders", () => {
        // @ts-expect-error i dont know why ts cant detect Svelte component type
        render(App)

        const title = screen.getByText("preparado")

        expect(title).toBeTruthy()
    })
})
