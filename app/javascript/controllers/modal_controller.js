import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "modal" ]
  static classes = [ "active" ]

  open() {
    this.modalTarget.classList.add(this.activeClass)
  }

  close() {
    this.modalTarget.classList.remove(this.activeClass)
  }
}
