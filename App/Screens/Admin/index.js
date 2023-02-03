/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Image} from 'react-native';
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions';
import AdminStyles from './AdminStyles';

class AdminUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: true,
      loading: false,
      fcmToken: '',
      visibityOfPopUp: false,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <AdminStyles.WrapperViewVertical>
        <AdminStyles.SafeView>
          <AdminStyles.BackImage
            source={require('../../assets/backImage.png')}
          />
          <AdminStyles.InnerWrapper>
            <AdminStyles.InnerLeftView></AdminStyles.InnerLeftView>
            <AdminStyles.InnerRightView>
              <AdminStyles.WholeView>
                <AdminStyles.welcome>Welcome</AdminStyles.welcome>
                <AdminStyles.BussinessOwner>
                  Bussiness Owner
                </AdminStyles.BussinessOwner>
                <AdminStyles.ScrollView bounces={false}>
                  {/* Upper text No 1 */}
                  <AdminStyles.CarUppertxtView>
                    <AdminStyles.CarUppertxt>Requests</AdminStyles.CarUppertxt>
                    <AdminStyles.CarUppertxt2>
                      Businesses
                    </AdminStyles.CarUppertxt2>
                  </AdminStyles.CarUppertxtView>

                  {/* Upper text End here */}

                  {/* Card Whole View  N0. 1 */}
                  <AdminStyles.CardBoxView>
                    {/* First Card */}
                    <AdminStyles.CardBox>
                      <AdminStyles.InsidecardBox>
                        <AdminStyles.simpleView>
                          <AdminStyles.InsidecardBoxtxt>
                            Today's
                          </AdminStyles.InsidecardBoxtxt>
                          <AdminStyles.InsidecardBoxtxt>
                            Requests
                          </AdminStyles.InsidecardBoxtxt>
                        </AdminStyles.simpleView>
                        <Image
                          style={{width: 16.7, height: 16.7}}
                          source={require('../../assets/cardInsideIcon.png')}
                        />
                      </AdminStyles.InsidecardBox>
                      <AdminStyles.InsidecardlargeView>
                        <AdminStyles.Insidecardlargetxt>
                          1085
                        </AdminStyles.Insidecardlargetxt>
                      </AdminStyles.InsidecardlargeView>
                    </AdminStyles.CardBox>

                    {/* Second Card */}
                    <AdminStyles.CardBox>
                      <AdminStyles.InsidecardBox>
                        <AdminStyles.simpleView>
                          <AdminStyles.InsidecardBoxtxt>
                            Recent
                          </AdminStyles.InsidecardBoxtxt>
                          <AdminStyles.InsidecardBoxtxt>
                            Businesses
                          </AdminStyles.InsidecardBoxtxt>
                        </AdminStyles.simpleView>
                        <Image
                          style={{width: 16.7, height: 15}}
                          source={require('../../assets/boxIcon2.png')}
                        />
                      </AdminStyles.InsidecardBox>
                      <AdminStyles.InsidecardlargeView>
                        <AdminStyles.Insidecardlargetxt>
                          120k+
                        </AdminStyles.Insidecardlargetxt>
                      </AdminStyles.InsidecardlargeView>
                    </AdminStyles.CardBox>
                  </AdminStyles.CardBoxView>

                  {/* Card Whole View  Ends here */}

                  {/* Upper text No 2 */}
                  <AdminStyles.CarUppertxtView>
                    <AdminStyles.CarUppertxt>Products</AdminStyles.CarUppertxt>
                    <AdminStyles.CarUppertxt2>
                      Categories
                    </AdminStyles.CarUppertxt2>
                  </AdminStyles.CarUppertxtView>

                  {/* Upper text End here */}

                  {/* Card Whole View  N0. 2 */}
                  <AdminStyles.CardBoxView>
                    {/* First Card */}
                    <AdminStyles.CardBox>
                      <AdminStyles.InsidecardBox>
                        <AdminStyles.simpleView>
                          <AdminStyles.InsidecardBoxtxt>
                            New
                          </AdminStyles.InsidecardBoxtxt>
                          <AdminStyles.InsidecardBoxtxt>
                            Products
                          </AdminStyles.InsidecardBoxtxt>
                        </AdminStyles.simpleView>
                        <Image
                          style={{width: 16.7, height: 15}}
                          source={require('../../assets/boxIcon3.png')}
                        />
                      </AdminStyles.InsidecardBox>
                      <AdminStyles.InsidecardlargeView>
                        <AdminStyles.Insidecardlargetxt>
                          150+
                        </AdminStyles.Insidecardlargetxt>
                      </AdminStyles.InsidecardlargeView>
                    </AdminStyles.CardBox>

                    {/* Second Card */}
                    <AdminStyles.CardBox>
                      <AdminStyles.InsidecardBox>
                        <AdminStyles.simpleView>
                          <AdminStyles.InsidecardBoxtxt>
                            New
                          </AdminStyles.InsidecardBoxtxt>
                          <AdminStyles.InsidecardBoxtxt>
                            Categories
                          </AdminStyles.InsidecardBoxtxt>
                        </AdminStyles.simpleView>
                        <Image
                          style={{width: 20, height: 17.5}}
                          source={require('../../assets/boxIcon4.png')}
                        />
                      </AdminStyles.InsidecardBox>
                      <AdminStyles.InsidecardlargeView>
                        <AdminStyles.Insidecardlargetxt>
                          256k+
                        </AdminStyles.Insidecardlargetxt>
                      </AdminStyles.InsidecardlargeView>
                    </AdminStyles.CardBox>
                  </AdminStyles.CardBoxView>

                  {/* Card Whole View  Ends here */}

                  {/* Upper text No 3 */}
                  <AdminStyles.CarUppertxtView>
                    <AdminStyles.CarUppertxt>
                      Change Requests
                    </AdminStyles.CarUppertxt>
                    <AdminStyles.CarUppertxt2>
                      Services
                    </AdminStyles.CarUppertxt2>
                  </AdminStyles.CarUppertxtView>

                  {/* Upper text End here */}

                  {/* Card Whole View  N0. 3 */}
                  <AdminStyles.CardBoxView>
                    {/* First Card */}
                    <AdminStyles.CardBox>
                      <AdminStyles.InsidecardBox>
                        <AdminStyles.simpleView>
                          <AdminStyles.InsidecardBoxtxt>
                            Pending
                          </AdminStyles.InsidecardBoxtxt>
                          <AdminStyles.InsidecardBoxtxt>
                            Requests
                          </AdminStyles.InsidecardBoxtxt>
                        </AdminStyles.simpleView>
                        <Image
                          style={{width: 15, height: 20}}
                          source={require('../../assets/boxIcon5.png')}
                        />
                      </AdminStyles.InsidecardBox>
                      <AdminStyles.InsidecardlargeView>
                        <AdminStyles.Insidecardlargetxt>
                          1200
                        </AdminStyles.Insidecardlargetxt>
                      </AdminStyles.InsidecardlargeView>
                    </AdminStyles.CardBox>

                    {/* Second Card */}
                    <AdminStyles.CardBox>
                      <AdminStyles.InsidecardBox>
                        <AdminStyles.simpleView>
                          <AdminStyles.InsidecardBoxtxt>
                            Services
                          </AdminStyles.InsidecardBoxtxt>
                          <AdminStyles.InsidecardBoxtxt>
                            to be added
                          </AdminStyles.InsidecardBoxtxt>
                        </AdminStyles.simpleView>
                        <Image
                          style={{width: 16.7, height: 11.7}}
                          source={require('../../assets/boxIcon6.png')}
                        />
                      </AdminStyles.InsidecardBox>
                      <AdminStyles.InsidecardlargeView>
                        <AdminStyles.Insidecardlargetxt>
                          120k+
                        </AdminStyles.Insidecardlargetxt>
                      </AdminStyles.InsidecardlargeView>
                    </AdminStyles.CardBox>
                  </AdminStyles.CardBoxView>

                  {/* Card Whole View  Ends here */}

                  {/* Upper text No 4 */}
                  <AdminStyles.CarUppertxtView>
                    <AdminStyles.CarUppertxt>Addresses</AdminStyles.CarUppertxt>
                    <AdminStyles.CarUppertxt2>
                      Locations
                    </AdminStyles.CarUppertxt2>
                  </AdminStyles.CarUppertxtView>

                  {/* Upper text End here */}

                  {/* Card Whole View  N0. 4 */}
                  <AdminStyles.CardBoxView>
                    {/* First Card */}
                    <AdminStyles.CardBox>
                      <AdminStyles.InsidecardBox>
                        <AdminStyles.simpleView>
                          <AdminStyles.InsidecardBoxtxt>
                            Pending
                          </AdminStyles.InsidecardBoxtxt>
                          <AdminStyles.InsidecardBoxtxt>
                            Addresses
                          </AdminStyles.InsidecardBoxtxt>
                        </AdminStyles.simpleView>
                        <Image
                          style={{width: 17.5, height: 20}}
                          source={require('../../assets/boxIcon7.png')}
                        />
                      </AdminStyles.InsidecardBox>
                      <AdminStyles.InsidecardlargeView>
                        <AdminStyles.Insidecardlargetxt>
                          1200
                        </AdminStyles.Insidecardlargetxt>
                      </AdminStyles.InsidecardlargeView>
                    </AdminStyles.CardBox>

                    {/* Second Card */}
                    <AdminStyles.CardBox>
                      <AdminStyles.InsidecardBox>
                        <AdminStyles.simpleView>
                          <AdminStyles.InsidecardBoxtxt>
                            Requested
                          </AdminStyles.InsidecardBoxtxt>
                          <AdminStyles.InsidecardBoxtxt>
                            Locations
                          </AdminStyles.InsidecardBoxtxt>
                        </AdminStyles.simpleView>
                        <Image
                          style={{width: 11.6, height: 16.7}}
                          source={require('../../assets/boxIcon8.png')}
                        />
                      </AdminStyles.InsidecardBox>
                      <AdminStyles.InsidecardlargeView>
                        <AdminStyles.Insidecardlargetxt>
                          20
                        </AdminStyles.Insidecardlargetxt>
                      </AdminStyles.InsidecardlargeView>
                    </AdminStyles.CardBox>
                  </AdminStyles.CardBoxView>

                  {/* Card Whole View  Ends here */}
                </AdminStyles.ScrollView>
              </AdminStyles.WholeView>
            </AdminStyles.InnerRightView>
          </AdminStyles.InnerWrapper>
        </AdminStyles.SafeView>
      </AdminStyles.WrapperViewVertical>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminUser);
