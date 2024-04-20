package com.rozoomcool.hackapp

import android.content.SharedPreferences
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.ui.platform.LocalContext
import androidx.preference.PreferenceManager
import com.russhwolf.settings.Settings
import com.russhwolf.settings.SharedPreferencesSettings
import io.github.aakira.napier.DebugAntilog
import io.github.aakira.napier.Napier
import org.koin.dsl.module

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            Napier.base(DebugAntilog())
            val preferences = PreferenceManager.getDefaultSharedPreferences(LocalContext.current)
            App(androidPlatformModules(preferences))
        }
    }
}

fun androidModule(sharedPref: SharedPreferences) = module {
    single<Settings> {
        SharedPreferencesSettings(sharedPref)
    }
}

fun androidPlatformModules(sharedPref: SharedPreferences) = listOf(androidModule(sharedPref))

