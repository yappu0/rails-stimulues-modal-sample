import { Controller } from "@hotwired/stimulus"
import { Modal } from "bootstrap"

export default class extends Controller {
  static targets = [ "modal" ]

  initialize() {
    const modal = new Modal(this.element)
    modal.show()
  }
}
