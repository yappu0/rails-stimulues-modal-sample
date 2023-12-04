import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "modal" ]

  open() {
    this.modalTarget.showModal()
  }

  close() {
    this.modalTarget.close()
  }
}
