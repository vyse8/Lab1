package com.example.matthew_2.lab5;

import android.test.ActivityInstrumentationTestCase2;
import android.test.ViewAsserts;
import android.test.suitebuilder.annotation.MediumTest;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.TextView;

/**
 * Created by Matthew_2 on 10/1/2015.
 */
public class LoginTest extends ActivityInstrumentationTestCase2<Login> {

    private Login mLogin;
    private TextView mLoginText;
    private Login mLoginActivity;
    private Button mLoginButton;

    public LoginTest() {

        super(Login.class);

    }

    @Override
    protected void setUp() throws Exception {
        super.setUp();
        mLogin = getActivity();
        mLoginText =
                (TextView) mLogin
                        .findViewById(R.id.txtUserName);

        setActivityInitialTouchMode(true);

        mLoginActivity = getActivity();
        mLoginButton = (Button)
                mLoginActivity
                        .findViewById(R.id.btnLogin);
    }
    //This method tests that the default value for the UserName is Name
    public void testMyFirstTestTextView_labelText() {
        final String expected = "Name";
                //mLogin.getString(R.string.app_name);
        final String actual = mLoginText.getText().toString();
        assertEquals(expected, actual);
    }
    //This method tests that the Login Button is present on the screen with the right layout parameters
    @MediumTest
    public void testLoginButton_layout() {
        final View decorView = mLoginActivity.getWindow().getDecorView();

        ViewAsserts.assertOnScreen(decorView, mLoginButton);

        final ViewGroup.LayoutParams layoutParams =
                mLoginButton.getLayoutParams();
        assertNotNull(layoutParams);
        assertEquals(layoutParams.width, WindowManager.LayoutParams.WRAP_CONTENT);
        assertEquals(layoutParams.height, WindowManager.LayoutParams.WRAP_CONTENT);
    }
    //This method tests that the UserName textBox is initially visible on the screen
    @MediumTest
    public void testInfoTextView_layout() {
        final View decorView = mLoginActivity.getWindow().getDecorView();
        ViewAsserts.assertOnScreen(decorView, mLoginText);
        assertTrue(View.VISIBLE == mLoginText.getVisibility());
    }

}
