import carvagoLogo from '../../assets/carvago-logo.svg'
import { CButton } from '../CButton'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import linkedIn from './assets/linkedIn.svg'
import youtube from './assets/youtube.svg'
import dinersClub from './assets/dinersClub.svg'
import maestro from './assets/maestro.svg'
import visa from './assets/visa.svg'
import visaElectron from './assets/visaElectron.svg'
import masterCard from './assets/masterCard.svg'
import discover from './assets/discover.svg'

export const CFooter = () => {
  return (
      <footer
          className="
          border-t border-slate-300 bg-slate-50
          px-8 pb-8 pt-20 text-slate-600
          "
      >
          <nav className="mx-36">
              <div className='grid grid-cols-3'>
                  <div>
                      <div />

                      <img
                          alt="Carvago logo"
                          src={carvagoLogo}
                      />

                      <div className='pt-8 text-sm opacity-80'>
                          Carvago 2023 • All rights reserved
                      </div>
                  </div>

                  <div className='grid grid-cols-2'>
                      <div>
                          <h5 className='mb-6 text-xl font-bold'>
                              Carvago
                          </h5>

                          <CButton
                              classes='hover:bg-slate-50'
                              variant='light'
                          >
                              Buy
                          </CButton>

                          <CButton
                              classes='hover:bg-slate-50'
                              variant='light'
                          >
                              How it works
                          </CButton>

                          <CButton
                              classes='hover:bg-slate-50'
                              variant='light'
                          >
                              Reviews
                          </CButton>

                          <CButton
                              classes='hover:bg-slate-50'
                              variant='light'
                          >
                              Site map
                          </CButton>
                      </div>

                      <div>
                          <h5 className='mb-6 text-xl font-bold'>
                              Sevices
                          </h5>

                          <CButton
                              classes='hover:bg-slate-50'
                              variant='light'
                          >
                              CarAudit&#8482;
                          </CButton>

                          <CButton
                              classes='hover:bg-slate-50'
                              variant='light'
                          >
                              Delivery
                          </CButton>

                          <CButton
                              classes='hover:bg-slate-50'
                              variant='light'
                          >
                              Financing
                          </CButton>

                          <CButton
                              classes='hover:bg-slate-50'
                              variant='light'
                          >
                              Warranty
                          </CButton>
                      </div>
                  </div>

                  <div className='grid grid-cols-2'>
                      <div>
                          <h5 className='mb-6 text-xl font-bold'>
                              Company
                          </h5>

                          <CButton
                              classes='hover:bg-slate-50'
                              variant='light'
                          >
                              About us
                          </CButton>

                          <CButton
                              classes='hover:bg-slate-50'
                              variant='light'
                          >
                              Contact
                          </CButton>

                          <CButton
                              classes='hover:bg-slate-50'
                              variant='light'
                          >
                              Reviews
                          </CButton>

                          <CButton
                              classes='hover:bg-slate-50'
                              variant='light'
                          >
                              Site map
                          </CButton>
                      </div>

                      <div />
                  </div>

                  <div />
              </div>

              <div className="
                   mt-20 flex items-center justify-between border-t
                   border-slate-200 pt-12
              "
              >
                  <div className='flex items-center gap-4'>
                      <img
                          alt="visa"
                          src={visa}
                      />

                      <img
                          alt="visaElectron"
                          src={visaElectron}
                      />

                      <img
                          alt="masterCard"
                          src={masterCard}
                      />

                      <img
                          alt="maestro"
                          src={maestro}
                      />

                      <img
                          alt="dinersClub"
                          src={dinersClub}
                      />

                      <img
                          alt="discover"
                          src={discover}
                      />
                  </div>

                  <div className='flex items-center gap-8'>
                      <CButton
                          variant='link'
                      >
                          <img
                              alt="youtube"
                              src={youtube}
                          />
                      </CButton>

                      <CButton variant='link'>
                          <img
                              alt="linkedIn"
                              src={linkedIn}
                          />
                      </CButton>

                      <CButton variant='link'>
                          <img
                              alt="facebook"
                              src={facebook}
                          />
                      </CButton>

                      <CButton variant='link'>
                          <img
                              alt="instagram"
                              src={instagram}
                          />
                      </CButton>
                  </div>
              </div>
          </nav>
      </footer>
  )
}
