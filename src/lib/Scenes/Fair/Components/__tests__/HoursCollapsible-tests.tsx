import { Theme } from "@artsy/palette"
import { mount } from "enzyme"
import { WhiteButton } from "lib/Components/Buttons"
import { Markdown } from "lib/Components/Markdown"
import React from "react"
import { HoursCollapsible } from "../HoursCollapsible"

describe("HoursCollapsible", () => {
  const hours = "Monday: Foo - Bar\nTuesday: Bar - Baz\nWednesday - Friday: Closed"

  it("renders properly", () => {
    const comp = mount(
      <Theme>
        <HoursCollapsible hours={hours} />
      </Theme>
    )

    expect(comp.find(WhiteButton).props().text).toBe("Tap to Expand")
    expect(comp.text()).toContain("Hours")
  })

  it("expands when pressed", () => {
    const comp = mount(
      <Theme>
        <HoursCollapsible hours={hours} />
      </Theme>
    )

    comp
      .find(WhiteButton)
      .props()
      .onPress()

    expect(comp.text()).toContain(hours)
  })

  it("renders markdown", () => {
    const markdownHours =
      "**Collectors Preview**\r\nNovember 8 Thursday 14:00 to 20:00\r\n [November 9th](http://foo.bar)"

    const comp = mount(
      <Theme>
        <HoursCollapsible hours={markdownHours} />
      </Theme>
    )

    comp
      .find(WhiteButton)
      .props()
      .onPress()

    comp.update()

    expect(comp.find(Markdown).length).toEqual(1)
  })
})
