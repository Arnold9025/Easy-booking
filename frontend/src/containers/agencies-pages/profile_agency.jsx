import React, { Component } from "react";

import "./css/profile_agency.css"

class ProfileAgency extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-12 p-0">
            <nav aria-label="breadcrumb ">
              <ol class="breadcrumb py-3 px-3">
                <li class="breadcrumb-item active" aria-current="page">
                  Official Profile Of African Airlines Corporation
                </li>
              </ol>
            </nav>
          </div>
          <div class="col-md-5">
            <div class="row">
              <div class="col-12 bg-white p-0 px-3 py-3 mb-3">
                <div class="d-flex flex-column align-items-center">
                  <img
                    class="photo"
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.postermywall.com%2Findex.php%2Fart%2Ftemplate%2Faccace836cdf525328b7233de739e8d6%2Ftravel-logo%252Ctravel-agency-logo%252Ctravel-%2526-tour-design-template&psig=AOvVaw3L0yeomaeWQJNS6h-5yDxy&ust=1695218560244000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOiOy7LrtoEDFQAAAAAdAAAAABAE"
                    alt="photos"
                  />
                  <p class="fw-bold h4 mt-3">Africa Airlines Corporation</p>
                  <p class="text-muted">
                    Africa Airlines est la compagnie aérienne internationale
                    africaine, contrôlée à 100 % par l'Union Africaine. Elle a
                    été fondée en 1945 sous le nom d'African Travel Agence (ATA)
                    et a adopté son nom actuel en 1965. Elle fait partie de
                    l'Association internationale du transport aérien depuis 1959
                    et de l'Association aérienne africaine depuis sa création en
                    1968.
                  </p>
                </div>
              </div>
              <div class="col-12 bg-white p-0 px-2 pb-3 mb-3">
                {
                  <div class="d-flex justify-content-between border-bottom py-2 px-3">
                    <p>
                      <span class="fas fa-globe me-2"></span>Site Web
                    </p>
                    <a href="#">https://africanairlines.com</a>
                  </div>
                }
                {
                  <div class="d-flex justify-content-between border-bottom py-2 px-3">
                    <p>
                      <span class="fab fa-twitter me-2"></span>Twitter
                    </p>
                    <a href="">https://twitter.com/flyethiopian</a>
                  </div>
                }
                {
                  <div class="d-flex justify-content-between border-bottom py-2 px-3">
                    <p>
                      <span class="fab fa-instagram me-2"></span>Instagram
                    </p>
                    <a href="">www.instagram.com/fly.africanairlines/</a>
                  </div>
                }
                {
                  <div class="d-flex justify-content-between py-2 px-3">
                    <p>
                      <span class="fab fa-facebook-f me-2"></span>facebook
                    </p>
                    <a href="">www.facebook.com/AfricanAirlines.official/</a>
                  </div>
                }
              </div>
            </div>
          </div>
          <div class="col-md-7 ps-md-4">
            <div class="row">
              <div class="col-12 bg-white px-3 mb-3 pb-3">
                <div class="d-flex align-items-center justify-content-between border-bottom">
                  <p class="py-2">Nom complet</p>
                  <p class="py-2 text-muted">African Airlines Corporation</p>
                </div>
                <div class="d-flex align-items-center justify-content-between border-bottom">
                  <p class="py-2">Email</p>
                  <p class="py-2 text-muted">africanairlines@gmail.com</p>
                </div>
                <div class="d-flex align-items-center justify-content-between border-bottom">
                  <p class="py-2">Cellulaire</p>
                  <p class="py-2 text-muted">(239) 816-9029</p>
                </div>
                <div class="d-flex align-items-center justify-content-between border-bottom">
                  <p class="py-2">Mobile</p>
                  <p class="py-2 text-muted">(320) 380-4539</p>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                  <p class="py-2">Adresse</p>
                  <p class="py-2 text-muted">Yaounde,Dakar,Lome,Rabat</p>
                </div>
              </div>
              <div class="col-12 bg-white px-3 pb-2">
                <h6 class="d-flex align-items-center mb-3 fw-bold py-3">
                  <i class="text-info me-2">Guide</i> Evaluatif des Compagnies
                  Aériennes Africaines
                </h6>
                <small>Ponctualité</small>
                <div class="progress mb-3" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Fiabilité</small>
                <div class="progress mb-3" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "92% " }}
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Tarifs privilgiés</small>
                <div class="progress mb-3" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Qualité de service</small>
                <div class="progress mb-3" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <small>Service Client</small>
                <div class="progress mb-3" style={{ height: "5px" }}>
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileAgency;
